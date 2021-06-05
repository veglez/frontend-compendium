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
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../utils/projectsData.json';
import { useProjects } from './projectsStyles';

const ListOfProjects = () => {
  const classes = useProjects();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const results = data.results;
  return (
    <Box>
      <Typography variant='h6' component='h2'>
        List of projects
      </Typography>
      <GridList
        // cellHeight={200}
        cols={desktop ? 4 : tablet ? 3 : 2}
        spacing={20}
        classes={{ root: classes.gridList }}
      >
        <GridListTile
          key={'subheader'}
          cols={desktop ? 4 : tablet ? 3 : 2}
          style={{ height: 'auto' }}
        >
          <ListSubheader component='div'>
            Projects Belongs to the same bundle
          </ListSubheader>
        </GridListTile>
        {results.map((tile) => (
          <GridListTile
            key={tile.id}
            classes={{ imgFullWidth: classes.imgFullWidth }}
            component={Link}
            to={tile.path}
          >
            <img src={desktop ? tile.desktop : tile.mobile} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>More text into span</span>}
              actionIcon={
                <IconButton
                  aria-label={`infro about ${tile.title}`}
                  className={StyleSheet.icon}
                >
                  <Info />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};

export default ListOfProjects;
