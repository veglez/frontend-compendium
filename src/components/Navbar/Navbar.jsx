import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop/BackToTop';

const Navbar = () => {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar id='back-to-top-anchor'>
          <Typography variant='h6' to='/' component={Link}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Toolbar id='back-to-top-anchor' /> */}
      <BackToTop />
    </>
  );
};

export default Navbar;
