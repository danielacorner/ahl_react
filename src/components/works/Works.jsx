import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Contact from './contact/Contact';
import styled from 'styled-components';

const WorkTitle = styled.div`
  font-size: 36px;
  margin-top: 0px;
`;
const WorkText = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  margin: 0.5em 0 1.5em 0;
  @media only screen and (min-width: 992px) {
    margin: 0.5em 0 2.5em 0;
  }
`;
const ImagesContainer = styled.div`
  margin-bottom: 42px;
`;
const SmallImage = styled.img`
  width: 100%;
  margin: 20px 0px;
  cursor: pointer;
`;

class Works extends Component {
  state = {
    open: false,
    currentImg: '',
    works: [
      {
        id: '1',
        title: 'House of Commons Intranet',
        text:
        'House of Commons is in the process of redesigning Source, the intranet for Ministers of Parliament and their staff. The UX team at House of Commons defined the rough design strategy and Jumping Elephants was invited to facilitate the research and design activities.',
        images: [
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 1'
          },
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 2'
          }
        ]
      },
      {
        id: '2',
        title: 'UX Lead at Global Affairs Canada',
        text:
        'Some text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis debitis eveniet molestiae laudantium alias, tempora quidem atque sed laborum aliquam modi suscipit eum illo amet quod vel iusto odit iste.',
        images: [
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 1'
          },
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 2'
          }
        ]
      },
      {
        id: '3',
        title: 'Pave: Canadian Job Explorer',
        text:
          'Some text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis debitis eveniet molestiae laudantium alias, tempora quidem atque sed laborum aliquam modi suscipit eum illo amet quod vel iusto odit iste.',
        images: [
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 1'
          },
          {
            src: 'https://picsum.photos/750/450',
            largeImageURL: 'https://picsum.photos/1200/800',
            alt: 'Mouseover text for image 2'
          }
        ]
      }
    ]
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  // const actions = [
  //   <FlatButton label="Close" primary={true} onClick={this.handleClose} />
  // ];

  render() {
    return (
      <div>
        {this.state.works.map(work => (
          <div key={work.title.toString()}>
            <WorkTitle id={"work"+work.id}>{work.title}</WorkTitle>
            <WorkText>{work.text}</WorkText>
            <ImagesContainer>
              {work.images.map(image => (
                <SmallImage
                  key={image.alt.toString()}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => this.handleOpen(image.largeImageURL)}
                />
              ))}
            </ImagesContainer>
          </div>
        ))}
        <div>
          <Contact />
        </div>
        <Modal // actions={actions}
          // modal={false}
          open={this.state.open}
          onBackdropClick={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Modal>
      </div>
    );
  }
}

export default Works;
