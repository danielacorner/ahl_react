import React, { Component } from 'react';
import Connect from './connect/Connect';
import Media from 'react-media';
import profileImg from '../../images/Adrianne2018.jpg';
import styled from 'styled-components';
import FloatingConnect from './floating-connect/FloatingConnect';
import Breakpoints from '../../Breakpoints';
import { withStyles } from '@material-ui/core';

const Container = styled.div`
  margin-bottom: 37px;
`;
const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 215px 245px;
  grid-template-rows: 246px 175px;
  // grid-row-gap: 0px;
  // grid-column-gap: 24px;
`;
const BioGridContainer = styled.div`
  @media only screen and ${Breakpoints.desktop.minWidth} {
    max-width: none;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-gap: 48px;
  }
`;
const Title = styled.p`
  font-size: 72px;
  margin-bottom: 28px;
`;
const BioText = styled.div`
  font-size: 18px;
  width: 100%;
  min-width: 429px;
`;
const ProfileImg = styled.img`
  width: 245px;
  height: 256px;
`;
const styles = {
  highlightLink: {
    '&:hover': { backgroundColor: '#8fff00' }
  }
};
class Bio extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Title>Adrianne H Lee</Title>
        <BioGridContainer>
          <BioText>
            <p style={{ marginTop: '0px' }}>
              Hello, welcome to my simple-dimple website. I’m a user experience
              designer and researcher in Canada currently working to improving
              the value of Government of Canada’s digital products.
            </p>
            <p>
              Here are some key things that make me excited to do the work I do
              - solving the right problems, developing candid and meaningful
              relationships with my coworkers, and learning every day.
            </p>
            <p>
              I am flexible and proficient with my tools. My favourites are
              online and collaborative (E.g. G Suite, Lucidchart), reliable and
              comprehensive (E.g. Adobe’s Creative Suite), and easy to map
              information on (E.g. Excel).
            </p>
            <p>
              I work with Jumping Elephants, a design consultancy in Ottawa. I
              graduated from the Industrial Design, Bachelor of Design program
              from OCAD University. For my full résumé, please see{' '}
              <a
                href="https://drive.google.com/file/d/1Z0u0vxWN-Bz2IJ3w15U1EbikD9eoiG-N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'black'
                }}
                className={classes.highlightLink}
              >
                here
              </a>
              .
            </p>
          </BioText>
          <Media query={Breakpoints.desktop.minWidth}>
            {matches =>
              matches ? ( // tablet & desktop only // mobile
                <ImageGridContainer>
                  <div className="spacer" />
                  <ProfileImg src={profileImg} alt="Adrianne H. Lee" />
                  <Connect />
                  <div className="spacer" />
                </ImageGridContainer>
              ) : (
                <FloatingConnect />
              )
            }
          </Media>
        </BioGridContainer>
      </Container>
    );
  }
}

export default withStyles(styles)(Bio);
