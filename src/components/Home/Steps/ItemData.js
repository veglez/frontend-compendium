import { IconButton } from '@material-ui/core';
import { Photo } from '@material-ui/icons';
import React from 'react';

const one = ({ classes, props }) => (
  <>
    Search throught the input path files with the name structure of
    frontendmentor projects and unzip it.
  </>
);
const two = ({ classes, props }) => (
  <>
    For each zip file, the algorithm storage the name of the file in memory and
    use it for create an acronym using the first letter of each word of the
    project name, the acronym its gonna be usefull for ID's.
  </>
);
const three = ({ classes, props }) => (
  <>
    Iterate over the files of the project folder and looks for: images needed
    for the project, the main text and the final design (mobile and desktop
    version).
  </>
);
const four = ({ classes, props }) => (
  <>
    For images that correspond to the final design project, the algorithm copy
    those files in the{' '}
    <span className={classes.route}>src/assets/projects</span> folder. It uses
    the actual path from where the python script is running.
  </>
);

const five = ({ classes, props }) => (
  <>
    For images that correspond to the project, also copy those files but in the{' '}
    <span className={classes.route}>
      src/assets/images/
      <span className={classes.variable}>acronym</span>/
      <span className={classes.variable}>imageName</span>
    </span>{' '}
    folder.
  </>
);
const six = ({ classes, props }) => (
  <>
    After copying the images it will storage in memory a string of each image
    with the format{' '}
    <span className={classes.route}>
      import <span className={classes.variable}>imageName</span> from @images/
      <span className={classes.variable}>acronym</span>/
      <span className={classes.variable}>imageName</span>
    </span>
    , it will be usefull for the creation of the page component in react.
  </>
);
const seven = ({ classes, props }) => (
  <>
    The only data left is the main content, it will be extracted from the
    index.html inside the current frontendmentor folder project.
  </>
);
const eight = ({ classes, props }) => (
  <>
    With all this information now the page component can be created and save it
    in{' '}
    <span className={classes.route}>
      src/pages/
      <span className={classes.variable}>page_name</span>
    </span>{' '}
    The component will be build from the next template:{' '}
    <IconButton onClick={() => props.function(true)}>
      <Photo />
    </IconButton>
  </>
);
const nine = ({ classes, props }) => (
  <>
    Also has it can be seen in the picture of the template, the algorith also
    include an import for a module stylesheet in sass with initial styles, it is
    created at{' '}
    <span className={classes.route}>
      src/styles/<span className={classes.variable}>acronym</span>
      .module.scss
    </span>
  </>
);

export const steps = [one, two, three, four, five, six, seven, eight, nine];
