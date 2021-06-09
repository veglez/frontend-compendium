import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import React, { useState } from 'react';
import Message from './Message';

const CardProject = ({ tile, styles, desktopViewporFlag, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <GridListTile
      {...rest}
      rows={1}
      key={tile.id}
      classes={{ imgFullWidth: styles.imgFullWidth }}
    >
      {show && <Message projectName={tile.title} path={tile.path} />}
      <img
        id={tile.id}
        src={desktopViewporFlag ? tile.desktop : tile.mobile}
        alt={tile.title}
      />
      <GridListTileBar
        classes={{ root: styles.tileBar }}
        title={tile.title}
        actionPosition='left'
        actionIcon={
          <IconButton
            aria-label={`info about ${tile.title}`}
            onClick={() => setShow(!show)}
          >
            <Info />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

export default CardProject;
