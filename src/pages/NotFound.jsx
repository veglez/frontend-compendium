import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNotFound } from '../styles-material/notFound';
// import imgNotFound from '@images/notFound/background.jpg';
import imgNotFound from '@images/svg.svg';

const NotFound = () => {
  const classes = useNotFound();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imgNotFound} alt='not found' />
      <Button
        className={classes.button}
        variant='outlined'
        component={Link}
        to='/'
      >
        Go back to home
      </Button>
    </div>
  );
};

export default NotFound;
