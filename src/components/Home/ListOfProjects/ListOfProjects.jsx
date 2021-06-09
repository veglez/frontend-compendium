import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../utils/projectsData.json';
import CardProject from '../CardProject/CardProject';
import { useProjects } from './projectsStyles';

const ListOfProjects = () => {
  const classes = useProjects();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up('sm'));
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const results = data.results;
  const [show, setShow] = useState(false);

  return (
    <Box>
      <Typography variant='h6' component='h2'>
        List of projects
      </Typography>
      <GridList
        cellHeight={220}
        cols={desktop ? 4 : tablet ? 3 : mobile ? 2 : 1}
        spacing={20}
        classes={{ root: classes.gridList }}
      >
        <GridListTile
          key={'subheader'}
          cols={desktop ? 4 : tablet ? 3 : mobile ? 2 : 1}
          style={{ height: 'auto' }}
        >
          <ListSubheader component='div'>
            Projects Belongs to the same bundle
          </ListSubheader>
        </GridListTile>
        {results.map((tile) => {
          return (
            <CardProject
              key={tile.id}
              tile={tile}
              styles={classes}
              desktopViewporFlag={desktop}
            />

            // <GridListTile
            //   key={tile.id}
            //   classes={{ imgFullWidth: classes.imgFullWidth }}
            // >
            //   {show && (
            //     <Box className={classes.moreInfo}>
            //       <Link to={tile.path}>View Project</Link>
            //     </Box>
            //   )}
            //   <img
            //     id={tile.id}
            //     src={desktop ? tile.desktop : tile.mobile}
            //     alt={tile.title}
            //   />
            //   <GridListTileBar
            //     classes={{ root: classes.tileBar }}
            //     title={tile.title}
            //     // subtitle={<span>More text into span</span>}
            //     actionIcon={
            //       <IconButton
            //         aria-label={`info about ${tile.title}`}
            //         onClick={() => setShow(!show)}
            //       >
            //         <Info />
            //       </IconButton>
            //     }
            //   />
            // </GridListTile>
          );
        })}
      </GridList>
    </Box>
  );
};

export default ListOfProjects;
