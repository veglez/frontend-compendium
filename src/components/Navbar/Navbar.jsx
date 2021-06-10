import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import bookmarkTabs from '@iconify/icons-noto/bookmark-tabs';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BackToTop from '../BackToTop/BackToTop';

const useStyles = makeStyles((theme) => ({
  homeIcon: {
    color: theme.palette.common.white,
    fontSize: 32,
  },
  label: {
    gap: theme.spacing(1),
  },
  whiteSpace: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const current = useHistory();
  const path = current.location.pathname.split('/');
  console.log(path);

  return (
    <>
      <AppBar position='relative'>
        <Toolbar id='back-to-top-anchor'>
          <Button
            classes={{ label: classes.label }}
            className={classes.homeIcon}
            component={Link}
            to='/'
          >
            <Icon icon={bookmarkTabs} />
            <Typography>Compedium</Typography>
          </Button>
          <Box className={classes.whiteSpace}>
            {!tablet && (
              <>
                <Button to='/' component={Link}>
                  Home
                </Button>
                <Button to='/projects' component={Link}>
                  Projects finished
                </Button>
                <Button to='/about' component={Link}>
                  About
                </Button>
              </>
            )}
          </Box>
          {tablet && (
            <>
              <IconButton onClick={() => setOpen(true)}>
                <Menu />
              </IconButton>
              <Drawer
                variant='temporary'
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
              >
                <List>
                  <ListItem divider component={Link} to='/'>
                    <Typography>Home</Typography>
                  </ListItem>
                  <ListItem divider component={Link} to='/projects'>
                    <Typography>Projects finished</Typography>
                  </ListItem>
                  <ListItem divider component={Link} to='/about'>
                    <Typography>About</Typography>
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      {path.length > 2 && path[1] === 'projects' && (
        <Toolbar>
          <Button variant='contained' onClick={current.goBack}>
            Go back
          </Button>
        </Toolbar>
      )}
      <BackToTop />
    </>
  );
};

export default Navbar;
