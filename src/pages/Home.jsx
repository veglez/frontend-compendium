import React from 'react';
import { Button, Typography } from '@material-ui/core';

import { homeStyles } from '../styles-material/home';

import Introduction from '../components/Home/Introduction/Introduction';
import Explanation from '../components/Home/Explanation/Explanation';
import { Link } from 'react-router-dom';

const Home = () => {
  const classes = homeStyles();

  return (
    <main className={classes.container}>
      <Typography variant='h3' component='h1' className={classes.mainH1}>
        Welcome to the frontend mentor compendium
      </Typography>
      <Introduction />
      <Explanation />
      <Button
        variant='contained'
        color='primary'
        component={Link}
        to='/projects'
      >
        <Typography classes={{ root: classes.buttonText }}>
          Let's see the projects
        </Typography>
      </Button>
    </main>
  );
};

export default Home;
