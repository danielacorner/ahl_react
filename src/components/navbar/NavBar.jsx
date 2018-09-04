import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => (
  <AppBar title="" iconClassNameRight="people">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Adrianne H. Lee
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
