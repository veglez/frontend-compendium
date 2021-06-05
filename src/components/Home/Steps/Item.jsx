import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { RiArrowDropRightFill } from 'react-icons/ri';
const Item = ({ iconSize, mainContent, classes, extra }) => {
  return (
    <ListItem divider dense>
      <ListItemIcon>
        <RiArrowDropRightFill size={iconSize} />
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
