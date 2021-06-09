import { GitHub, Web } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCardProject } from './styles_CardProject';

const Message = ({ projectName, path }) => {
  const classes = useCardProject();
  return (
    <div className={classes.message}>
      <span>{projectName}</span>
      <GitHub />
      <Link to={path}>
        <Web />
      </Link>
    </div>
  );
};

export default Message;
