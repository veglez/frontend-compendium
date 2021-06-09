import { IconButton } from '@material-ui/core';
import { BsEyeFill } from 'react-icons/bs';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCardProject } from './styles_CardMessage';

const Message = ({ projectName, path }) => {
  const classes = useCardProject();
  return (
    <div className={classes.message}>
      <span>{projectName}</span>
      <IconButton component={Link} to={path}>
        <BsEyeFill color='f2f2f2' />
      </IconButton>
    </div>
  );
};

export default Message;
