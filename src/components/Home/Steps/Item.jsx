import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
const Item = ({ iconSize, mainContent, classes, extra }) => {
  return (
    <ListItem divider dense>
      <ListItemIcon>
        <BsCircleFill size={iconSize} />
      </ListItemIcon>
      <ListItemText
        primary={React.createElement(mainContent, {
          classes: classes,
          props: extra,
        })}
      />
    </ListItem>
  );
};

export default Item;
