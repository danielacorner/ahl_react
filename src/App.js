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
import Breakpoints from './Breakpoints';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    fontFamily: 'PT Sans',
    fontSize: '18px'
  }
});
const BorderBox = styled.div`
  margin: auto;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    border: 2px solid rgba(0, 0, 0, 0.9);
    margin: 44px;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  font-family: PT Sans;
  max-width: 301px;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    max-width: 511px;
  }
  @media only screen and ${Breakpoints.desktop.minWidth} {
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
const BuiltByDC = styled.div`
  bottom: 0px;
  font-family: PT Sans;
  font-size: 18px;
  margin: -30px 0 15px 45px;
  a {
    color: black;
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
            <Media query={Breakpoints.desktop.maxWidth}>
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
        <BuiltByDC>
          Built by&nbsp;
          <a
            href="https://dcorn068.github.io/"
            target="_blank"
            aria-label="Daniel Corner's portfolio"
          >
            Daniel Corner
          </a>
        </BuiltByDC>
      </MuiThemeProvider>
    );
  }
}

export default App;
