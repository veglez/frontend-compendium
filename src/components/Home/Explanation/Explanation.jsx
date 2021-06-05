import React, { useState } from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from '@material-ui/core';
import template from '@images/page-component-layout.png';
import { steps } from '../Steps/ItemData';
import Item from '../Steps/Item';
import { useItems } from '../Steps/useItems';
import { useExplanation } from './useExplenation';
const Explanation = () => {
  const classes = useItems();
  const classes2 = useExplanation();
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography>
        The steps the algorith follows to complete its task are:
      </Typography>
      <List className={classes.list}>
        {steps.map((content, i) => {
          return (
            <Item
              iconSize={30}
              mainContent={content}
              classes={classes}
              extra={{ function: setOpen }}
              key={i}
            />
          );
        })}
        {/* <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={`<strong>Search</strong> throught the input path files with the name structure of frontendmentor projects and unzip it`}
          />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText primary="For each zip file, the algorithm storage the name of the folder in memory and use it for create an acronym using the first letter of each word the project name has, the acronym its gonna be usefull for ID's" />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText primary='Iterate over the files of the project folder and looks for: images needed for the project, the main text and the final design (mobile and desktop version)' />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                For images that correspond to the final design project, the
                algorithm copy those files in a the{' '}
                <span className={classes.route}>src/assets/projects</span>{' '}
                folder on this compendium project
              </span>
            }
          />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                For images that correspond to the project, also copy those files
                but in the{' '}
                <span className={classes.route}>
                  src/assets/images/
                  <span className={classes.variable}>acronym</span>/
                  <span className={classes.variable}>imageName</span>
                </span>{' '}
                folder
              </span>
            }
          />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                After copying the images it will storage in memory a string of
                each image with the format{' '}
                <span className={classes.route}>
                  import <span className={classes.variable}>imageName</span>{' '}
                  from @images/
                  <span className={classes.variable}>acronym</span>/
                  <span className={classes.variable}>imageName</span>
                </span>
                , it will be usefull for the creation of the page component in
                react
              </span>
            }
          />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText primary='The only data left is the main content, it will be extracted from the index.html inside the current frontendmentor folder project' />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                With all this information now the page component can be created
                and save it in{' '}
                <span className={classes.route}>
                  src/pages/
                  <span className={classes.variable}>page_name</span>
                </span>{' '}
                The component will be build from the next template:{' '}
                <IconButton onClick={() => setOpen(true)}>
                  <Photo />
                </IconButton>
              </span>
            }
          />
        </ListItem>
        <ListItem divider dense>
          <ListItemIcon>
            <RiArrowDropRightFill size={30} />
          </ListItemIcon>
          <ListItemText
            primary={
              <span>
                Also has it can be seen in the picture of the template, the
                algorith also include an import for a module stylesheet in sass
                with initial styles, it is created at{' '}
                <span className={classes.route}>
                  src/styles/<span className={classes.variable}>acronym</span>
                  .module.scss
                </span>
              </span>
            }
          />
        </ListItem>*/}
      </List>
      <Modal open={open} onClose={() => setOpen(false)}>
        <img
          src={template}
          alt='template to create a page component'
          className={classes2.modalImg}
        />
      </Modal>
      <Box>
        <Typography>Now the fun part &#x1F601; </Typography>
        <Typography>
          Since this will continue growing it should be scalable, also{' '}
          <span className={classes.route}>react-router-dom</span> manage the
          routing behind scenes so there is a need to create routes for each
          project and also the data needed to create the presentational card to
          see the projects.
        </Typography>
        <Typography>
          In order to do achive all this, the algorithm create 2 more files:{' '}
          <span className={classes.variable}>routes.js</span> and{' '}
          <span className={classes.variable}>projectsData.json</span> in the{' '}
          <span className={classes.route}>src/utils</span> folder.
        </Typography>
        <Box>
          <Typography>
            The <span className={classes.variable}>route.js</span> file exports
            an array of objects, each objects contains the necessary data for
            the Route component of react-router-dom:
          </Typography>
          <List>
            <ListItem dense>
              <ListItemText
                primary={
                  <span>
                    An ID for the key prop (in this case the{' '}
                    <span className={classes.variable}>acronym</span> of the
                    project)
                  </span>
                }
              />
            </ListItem>
            <ListItem dense>
              <ListItemText primary={'A component for the rendering '} />
            </ListItem>
            <ListItem dense>
              <ListItemText
                primary={
                  'A path from where the react-router-dom will reference the project.'
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography>
            Finally, the{' '}
            <span className={classes.variable}>projectsData.json</span> file
            contains the information for the presentational card. The image of
            the cover of the cards is the same that the algorithm storaged in{' '}
            <span className={classes.route}>src/assets/projects</span>
          </Typography>
        </Box>
      </Box>
      <Typography>
        So that's it, when a new projects is downloaded we just need to run the
        script and everything will be ready, we just need to focus in only one
        thing: solve the exercise .
      </Typography>
      <Typography>
        When the algorithm becomes more robust i will publish it hoping it helps
        new developers to practice their frontend skill with react.
      </Typography>
    </Box>
  );
};

export default Explanation;
