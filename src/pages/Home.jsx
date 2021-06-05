import React from 'react';
import { Typography } from '@material-ui/core';

import { homeStyles } from '../styles-material/home';

import ListOfProjects from '../components/Home/ListOfProjects/ListOfProjects';
import Introduction from '../components/Home/Introduction/Introduction';
import Explanation from '../components/Home/Explanation/Explanation';

const Home = () => {
  const classes = homeStyles();

  return (
    <main className={classes.container}>
      <Typography variant='h3' component='h1' className={classes.mainH1}>
        Welcome to the frontend mentor compendium
      </Typography>
      <Introduction />
      <Explanation />
      <ListOfProjects />
    </main>
  );
};

export default Home;
