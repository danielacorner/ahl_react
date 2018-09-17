import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Contact from './contact/Contact';
import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const WorkTitle = styled.div`
  font-size: 36px;
  margin-top: 0px;
`;
const WorkText = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  margin: 0.5em 0 1.5em 0;
  @media only screen and ${Breakpoints.desktop.minWidth} {
    margin: 0.5em 0 2.5em 0;
  }
`;
const ImagesContainer = styled.div`
  margin-bottom: 42px;
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
            src:
              'https://image.ibb.co/n3WrKz/Adrianne_Lee_Portfolio_Aug13_005.jpg',
            largeImageURL:
              'https://image.ibb.co/n3WrKz/Adrianne_Lee_Portfolio_Aug13_005.jpg',
            alt:
              '(Page from portfolio) A sample of personas used during the project.'
          }
        ]
      },
      {
        id: '2',
        title: 'UX Lead at Global Affairs Canada',
        text:
          'Global Affairs Canada (GAC) is a federal department that is in the process of growing in-house UX expertise. For a period of 6 weeks, I was invited to lead UX research and design activities for the Web Communications team and to train the team on UX tools and techniques.',
        images: [
          {
            src:
              'https://image.ibb.co/ixNLCK/Adrianne_Lee_Portfolio_Aug13_021.jpg',
            largeImageURL:
              'https://image.ibb.co/ixNLCK/Adrianne_Lee_Portfolio_Aug13_021.jpg',
            alt:
              "(Page from portfolio) Text about addressing the GAC team's assumptions. List of questions used during a workshop with the team to address assumptions."
          }
        ]
      },
      {
        id: '3',
        title: 'Pave: Canadian Job Explorer',
        text:
          'Pave is an online tool that helps students plan their future. This project emerged from and placed 3rd place in a 6-week long competition (the Student Pathways Challenge) held by the Government of Ontario and the Brookfield Institute.',
        images: [
          {
            src:
              'https://image.ibb.co/bVxyzz/Adrianne_Lee_Portfolio_Aug13_013.jpg',
            largeImageURL:
              'https://image.ibb.co/bVxyzz/Adrianne_Lee_Portfolio_Aug13_013.jpg',
            alt:
              'Text explaining the problem identification and user segmentation process. Includes a diagram of user segmentation quadrant.'
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
            <WorkTitle id={'work' + work.id}>{work.title}</WorkTitle>
            <WorkText>{work.text}</WorkText>
            <ImagesContainer>
              {work.images.map(image => (
                <img
                  style={{
                    width: '100%',
                    margin: '20px 0px',
                    cursor: 'pointer'
                  }}
                  onClick={() => this.handleOpen(image.largeImageURL)}
                  key={image.alt.toString()}
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                />
              ))}
            </ImagesContainer>
          </div>
        ))}
        <div>
          <Contact />
        </div>
        <Modal // modal={false} // actions={actions}
          open={this.state.open}
          onBackdropClick={this.handleClose}
          onEscapeKeyDown={this.handleClose}
        >
          <div>
            <IconButton
              aria-label="close"
              style={{
                position: 'fixed',
                top: 5,
                left: 5
              }}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
            <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Works;
