import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
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
    <Box className={classes2.container}>
      <Typography>
        The algorithm get as an input the directory absolute path where the
        downloaded zip are storage. Then, the steps the algorithm follows to
        complete its task are:
      </Typography>
      <List className={classes.list}>
        {steps.map((content, i) => {
          return (
            <Item
              iconSize={10}
              mainContent={content}
              classes={classes}
              extra={{ function: setOpen }}
              key={i}
            />
          );
        })}
      </List>
      <Modal open={open} onClose={() => setOpen(false)}>
        <img
          src={template}
          alt='template to create a page component'
          className={classes2.modalImg}
        />
      </Modal>
      <Box className={classes2.extra}>
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
        new developers to practice their frontend skill with react. One problem
        it doesn't resolve yet, is create the webpack configuration file with
        the correct alias and plugins to make this works propertly.
      </Typography>
    </Box>
  );
};

export default Explanation;
