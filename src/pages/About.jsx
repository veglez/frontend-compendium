import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useAbout } from '../styles-material/about';

const About = () => {
  const classes = useAbout();
  return (
    <div className={classes.container}>
      <Typography>Done by: Valentín Eduardo González Morales</Typography>
      <Typography>
        You can visit my page{' '}
        <a href='https://veglez.com' className={classes.myWebsite}>
          here
        </a>
      </Typography>
      <Typography>This project has been done with:</Typography>
      <List>
        <ListItem divider disableGutters>
          <Button
            variant='contained'
            component='a'
            href='https://reactjs.org/'
            className={classes.tech}
          >
            React
          </Button>
        </ListItem>
        <ListItem divider disableGutters>
          <Button
            variant='contained'
            component='a'
            href='https://https://www.python.org/'
            className={classes.tech}
          >
            Python
          </Button>
        </ListItem>
        <ListItem divider disableGutters>
          <Button
            variant='contained'
            component='a'
            href='https://material-ui.com/'
            className={classes.tech}
          >
            Material-UI
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default About;
