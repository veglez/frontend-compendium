import os
import re
from pathlib import Path
from shutil import copyfile
import json
from zipfile import ZipFile
import zipfile



dinamicImport = 'import {0} from "@pages/{0}"'
dinamic_page_imports= ''


frontendMentor_folders = Path('/home/veglez/Projects/frontend/frontendmentor')

#dirección del proyecto
actual = Path(os.path.realpath(__file__)).parent

# isProject = re.compile(r'^\.\/(?:[a-z]+-)+[a-z]+$')
#se asume que estamos en una carpeta donde se descomprimen los archivos de frontendmentor tal cual vienen escritos, solo extraer y listo
isProject = re.compile(r'(?:[a-z]+-)+[a-z]+$') 
finalDesign = re.compile(r'(desktop|mobile)-design.*\.jpg$')
renglones = re.compile(r'.+')
results = []
rutas = {
    #"key": (import, component, path),
}

def create_folder_structure(file_absolute_path):
    #recibe un objeto del tipo PoxisPath del archivo
    try:
        if not file_absolute_path.exists():
            if not file_absolute_path.parent.exists():
                file_absolute_path.parent.mkdir(parents=True)
    except:
        print('Ya existe el folder {}'.format(file_absolute_path.parent))
    return True

def CreateFile(file_absolute_path, data_of_file):
    if file_absolute_path.exists(): return True
    if create_folder_structure(file_absolute_path):
        with open(file_absolute_path, 'w') as newFile:
            newFile.write(data_of_file)

def createPageComponent(name_of_page_component, dinamic_page_imports, stylesheet_acronnym, mainText):
    component_layout = '''
    import React from "react";
    import Styles from "{style}";
    {images}
    
    const {component_name} = () => {{
    return(
            <div className={{Styles.container}}>
                <h1> Estas en la página {component_name} </h1>
                <section>{mainContent}</section>
            </div>
        );
    }};
    

    export default {component_name};'''.format(
        component_name=name_of_page_component, 
        images=dinamic_page_imports, 
        style='@styles/{0}.module.scss'.format(stylesheet_acronnym), 
        mainContent=mainText)

    stylesheet_layout= '''
    .container {
        border: 1px solid steelblue;
    }
    '''
    component_file = Path(actual, 'src/pages/{0}.jsx'.format(name_of_page_component))
    CreateFile(component_file, component_layout)
    stylesheet_file = Path(actual, 'src/styles/{0}.module.scss'.format(stylesheet_acronnym))
    CreateFile(stylesheet_file, stylesheet_layout)


def transform2ResponsiveSVG(text):
    # beforeWidth = 'beforeWidth'
    widthHeight = 'widthHeight'
    widthValue = 'widthValue'
    heightValue = 'heightValue'
    # viewbox = 'viewbox'
    # viewboxValue= 'viewboxValue'
    patronWidthHeight = r'(?:<svg[\w\/\-}=:"{\.\s]+)(?P<widthHeight>width="(?P<widthValue>[\d\.]+)"\s+height="(?P<heightValue>[\d\.]+)")|(?P<viewbox>viewbox="(?P<viewboxValue>[\w\.\s]+)")'
    patternWidthHeight = re.compile(patronWidthHeight)
    matchWidthHeight = patternWidthHeight.search(text)
    vhStart, vhEnd = matchWidthHeight.span(widthHeight)
    # wvStart, wvEnd = matchWidthHeight.span(widthValue)
    wStart,wEnd = matchWidthHeight.span(widthValue)
    hStart, hEnd = matchWidthHeight.span(heightValue)
    beforeWH = text[:vhStart]
    afterWH = text[vhEnd: ]
    newText = 'preserveAspectRatio="xMinYMin slice" viewBox="0 0 {width} {height}"'.format(width=text[wStart:wEnd], height=text[hStart:hEnd])
    # empieza verificacion del viewbox
    # print(newText)
    # patronViewbox = r'(?:<svg[\w\/\-}=:"{\.\s]+)(?P<viewbox>viewbox="(?P<viewboxValue>[\w\.\s]+)")'
    # patternViewbox = re.compile(patronViewbox)
    # matchViewbox = patternViewbox.search(text)
    return beforeWH+newText+afterWH


def HTML_to_React_attributes(svg):
    #Los atributos en react siempre deben ser camelCase, esta función busca posibles attributos html y los convierte a svg
    svg = transform2ResponsiveSVG(svg)
    pattern = re.compile(r'([a-z]+-[a-z]+)')  #para los atributos del tipo data-src convertirlos a dataSrc
    pattern1= re.compile(r'([a-z]+:[a-z]+)')  #para los atributos del tipo xmlns:xlink convertilos a xmlnsXlink
    patterns = [(pattern,'-'), (pattern1,':')]
    for p in patterns:
        attrs = p[0].findall(svg)
        if attrs:
            attrs = set(attrs)
            for attr in attrs:
                init, *parts= attr.split(p[1]) 
                camelCase = ''.join([init, *map(str.capitalize, parts)])
                svg = svg.replace(attr, camelCase)
    svg = svg.replace('<svg', '<svg className={{className}}'.format('className'))
    return svg


def createSVGJSX(svg_filename, root, acronnym ):
    imageName = svg_filename[:-4].split('-') #Se esepra que el nombre siga el formato "icon-error.svg", se extrae "icon-error"
    PascalCaseFullSvgName = ''.join(map(lambda x: x.capitalize(), imageName )) #Se debería convertir a IconError
    svg_file = ''.join([root, '/',  svg_filename]) #La ruta donde se lee el archivo SVG original
    with open(svg_file, 'r') as svg:
        tags = svg.read()
    svg_component = HTML_to_React_attributes(tags)
    svg_layout = """import React from "react";
            
    const {PascalNameSVG} = ({{className}}) =>{{
    return(
        {contenidoSVG}
    )
    }};

    export default {PascalNameSVG};""".format(PascalNameSVG=PascalCaseFullSvgName, contenidoSVG=svg_component)

    output_svg_component = actual.joinpath('src','components', acronnym, PascalCaseFullSvgName)
    CreateFile(output_svg_component, svg_layout)
    return PascalCaseFullSvgName


def doTheMagic():
    for root, dirs, files in os.walk(str(frontendMentor_folders)):
        item = {}         
        if isProject.search(root): #se espera algo como blogr-landing-page-main
            project_acronym = ''    
            projectName = root.split('/')[-1].split('-') 
            capitalizedProjectName = ' '.join(map(lambda x: x.capitalize(), projectName )) #blogr-landing-page-main => Blogr Landing Page Main
            component_name = capitalizedProjectName.replace(' ', '') #Blogr Landing Page Main => BlogrLandingPageMain
            for word in projectName:
                project_acronym += word[0].upper() #Blogr Landing Page Main => BLPM
            for currentFile in files:     #se busca el archivo con terminación html en la carpeta del proyecto
                if 'html' in currentFile:
                    mainFile = Path(root, currentFile)
                    mainText = mainFile.read_text('utf-8')#.replace('\n', '')
                    mainContent = re.search(r'<body>\s*(?P<content>[\w\s\-\.\'!,+?“”’"@:\/]+)',mainText)
                    mainText = mainText[mainContent.span('content')[0]: mainContent.span('content')[1]]
                    # allRenglones = renglones.findall(mainText)
                    # mainText = ''.join(['<div>{}</div>\n'.format(i.strip()) for i in allRenglones])
            # import pdb; pdb.set_trace()
            
        if 'design' in root:
            for image in files:
                if finalDesign.search(image): #verificamos que sea del tipo desktop-design or mobile-design
                    # print("estamos recogiendo la imagen mobile o desktop-design {} en root: {}".format(image, root))
                    designSrc = Path(root, image)
                    dst = Path.joinpath(actual, 'src/assets/projects',project_acronym+'-'+image)
                    create_folder_structure(dst)
                    copyfile(designSrc, dst)            
                    key = image.split('-')[0]
                    source = '/projects/{0}-{1}'.format(project_acronym, image)
                    item[key] = source
            item['id'] = project_acronym
            item['title'] = capitalizedProjectName
            item['path'] = '/projects/{0}'.format(project_acronym)
            results.append(item)
            rutas[project_acronym] = (dinamicImport.format(component_name), component_name, '/projects/{0}'.format(project_acronym), project_acronym )

        if 'images' in root:
            dinamic_page_imports=''
            for image in files:
                PosixImage = Path(image)
                if 'favicon' not in image:
                    #filtramos solo los archivos svg
                    if PosixImage.suffix in ['.svg', '.png', '.jpg', '.jpeg' ]:  #and 'bg' not in image:  #Solo convertimos a componentes los que no sean svg de fondo
                        imageNameInit, *rest = image[:-4].split('-') 
                        camelCaseName = ''.join([imageNameInit, *map(lambda x: x.capitalize(), rest )])
                        # page_name = createSVGJSX(image, root, project_acronym)    #Aqui se crean los archivos svg a componentes de react
                        # dinamic_page_imports += 'import {name} from "@components/{acronnym}/{name}";\n'.format(name=camelCaseName, acronnym = project_acronym)
                        dinamic_page_imports += 'import {name} from "@images/{acronym}/{original}";\n'.format(name=camelCaseName, acronym = project_acronym, original = image)
                        imgSrcPath = Path(root, image)
                        imgOuput = Path(actual, 'src/assets/images', project_acronym, image)
                        create_folder_structure(imgOuput)
                        copyfile(imgSrcPath, imgOuput)
                    # else:
                    #     src = Path.joinpath(actual, root, image)
                    #     output_to_local = Path(actual, 'src/assets/frontendmentor', project_acronym)
                        # if not output_to_local.exists():
                        #     output_to_local.mkdir(parents=True)
                        # output_to_local = output_to_local.joinpath(image)
                        # copyfile(src, output_to_local)
                        # output_to_portfolio = Path(ruta_portafolio, 'src/assets/frontendmentor', project_acronym)
                        # if not output_to_portfolio.exists():
                        #     output_to_portfolio.mkdir(parents=True)
                        # output_to_portfolio = output_to_portfolio.joinpath(image)
                        # copyfile(src, output_to_portfolio)
            #aqui funciona la variable component_name
            # print(component_name)
            createPageComponent(component_name, dinamic_page_imports, project_acronym, mainText)
    #Genera los datos necesarios para poner las Cards en la pagina "projects"
    filename_json = 'projectsData.json'
    json_output = Path.joinpath(actual, 'src/utils', filename_json)
    create_folder_structure(json_output)  #IMPORTANTE esto también sirve para el archivo routes, no es necesario volverlo a llamar para routes.js
    with open(json_output, 'w') as f:
        json.dump({"results": results}, f)
    imports = ''
    variable = ''
    filename_routes = 'routes.js'
    routes_file = Path.joinpath(actual, 'src/utils', filename_routes) 
    with open(routes_file, 'w') as routesFile:
        routesFile.seek(0)
        routesFile.truncate(0)
        for key, item in rutas.items():
            #'BACSM': ('import BaseApparelComingSoonMaster from "../pages/frontendmentor/BaseApparelComingSoonMaster"', 'BaseApparelComingSoonMaster', '/projects/BACSM', BACSM)
            imports += item[0]+';\n'
            variable += '  {{ component: {0}, path: "{1}", id:"{2}"}},\n'.format(item[1], item[2], item[3])
        final_text = "{0}\nconst routes = [\n{1}];\n\nexport default routes;".format(imports, variable)
        routesFile.write(final_text)


#this unzip the file if the folders doesn't exists
for zip in frontendMentor_folders.iterdir():
    #print(zip.parent)
    if zip.suffix == '.zip':
        folderProject = Path(zip.parent, zip.stem)
        #print(folderProject)
        if not folderProject.exists():
            print("folder {} doesn't exist".format(folderProject))
            with ZipFile(str(zip), 'r') as zipFile:
            #if it runs without parameters, it will extract the files
            #from the path where the script is running
                zipFile.extractall(zip.parent) 

doTheMagic()