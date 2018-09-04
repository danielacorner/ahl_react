import React, { Component } from 'react';
import './App.css';
// import NavBar from './components/navbar/NavBar';
import Bio from './components/bio/Bio';
import Works from './components/works/Works';
import WorkLinks from './components/work-links/WorkLinks';
import styled from 'styled-components';
import Media from 'react-media';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    fontFamily: 'PT Sans',
    fontSize: '18px'
  }
});
const BorderBox = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.9);
  margin: 44px;
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  font-family: PT Sans;
  max-width: 511px;
  @media only screen and (min-width: 992px) {
    max-width: 1080px;
    padding: 50px;
  }
`;
const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  div {
    padding-top: 25px;
  }
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BorderBox>
          <Container>
            {/* <NavBar /> */}
            <Bio />
            <Media query="(max-width: 991px)">
              {matches =>
                matches ? (
                  // mobile
                  <div>
                    <WorkLinks />
                    <Works />
                  </div>
                ) : (
                  // tablet & desktop
                  <WorkGrid>
                    <WorkLinks />
                    <Works />
                  </WorkGrid>
                )
              }
            </Media>
          </Container>
        </BorderBox>
      </MuiThemeProvider>
    );
  }
}

export default App;
