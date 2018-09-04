import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Bio from './components/bio/Bio';
import Works from './components/works/Works';
import WorkLinks from './components/work-links/WorkLinks';
import { withStyles } from '@material-ui/core/styles';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const styles = {
  workGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridGap: '40px'
  }
};
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {/* <NavBar /> */}
          <Bio />
          <div className={this.props.classes.workGrid}>
            <WorkLinks />
            <Works />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
