import {  Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCardProject } from './styles_CardMessage';

const Message = ({ projectName, path }) => {
  const classes = useCardProject();
  return (
    <div className={classes.message}>
      <span>{projectName}</span>
      <Button variant={'contained'} color='secondary' component={Link} to={path}>See the page</Button>
    </div>
  );
};

export default Message;
