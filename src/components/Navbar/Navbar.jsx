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
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop/BackToTop';

const useStyles = makeStyles((theme) => ({
  homeIcon: {
    color: theme.palette.common.white,
    fontSize: 32,

    justifyContent: 'flex-start',
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
  return (
    <>
      <AppBar position='relative'>
        <Toolbar id='back-to-top-anchor'>
          <Button className={classes.homeIcon} component={Link} to='/'>
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
      <BackToTop />
    </>
  );
};

export default Navbar;
