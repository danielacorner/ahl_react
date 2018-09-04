import React, { Component } from 'react';
import Connect from './connect/Connect';
import Media from 'react-media';
import profileImg from '../../Adrianne2018.jpg';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 37px;
`;
const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 256px auto;
  // grid-row-gap: 19px;
  grid-column-gap: 8px;
`;
const BioGridContainer = styled.div`
  @media only screen and (min-width: 992px) {
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
`;
const ProfileImg = styled.img`
  width: 245px;
  height: 256px;
`;

class Bio extends Component {
  render() {
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
              relationships with my coworkers, and learning everyday.
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
              from OCAD University. For my full résumé, please see here.
            </p>
          </BioText>
          <Media
            query="(min-width: 992px)"
            render={() => (
              // tablet & desktop only
              <ImageGridContainer>
                <div className="spacer" />
                <ProfileImg src={profileImg} alt="Adrianne H. Lee" />
                <Connect />
                <div className="spacer" />
              </ImageGridContainer>
            )}
          />
        </BioGridContainer>
      </Container>
    );
  }
}

export default Bio;
