import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Zoom from '@material-ui/core/Zoom';
import profileImg from '../../../images/Adrianne2018.jpg';

const Header = styled.div`
  margin: 0;
  font-size: 36px;
`;
const LinksList = styled.ul`
  margin-top: 0px;
  padding: 0px;
`;
const Link = styled.li`
  list-style-type: none;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
  line-height: 2em;
  & a:hover {
    background-color: #8fff00;
  }
`;

const ModalContents = styled.div`
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.9);
  margin: auto;
  width: 302px;
  height: 603px;
  box-sizing: border-box;
  padding: 38px 24px;
  background-color: white;
  div {
    width: 254px;
    margin: auto;
  }
`;
const ProfileImg = styled.img`
  width: 254px;
  height: 265px;
  margin-bottom: 20px;
`;
const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '91px',
    height: '91px',
    textTransform: 'none',
    fontSize: '18px',
    fontFamily: 'PT Sans',
    fontWeight: 'normal',
    border: '2px solid rgba(0,0,0,0.9)',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: '#ebebeb',
      border: '2px solid rgba(0,0,0,0.9)'
    }
  },
  closeButton: {
    position: 'absolute',
    bottom: '26px',
    right: '26px',
    border: '2px solid rgba(0,0,0,0.9)',
    borderRadius: '100%'
  }
};

class Connect extends Component {
  state = {
    links: [
      {
        text: 'adriannehlee@gmail.com',
        link: 'mailto:adriannehlee@gmail.com'
      },
      {
        text: 'Résumé',
        link:
          'https://drive.google.com/file/d/1Z0u0vxWN-Bz2IJ3w15U1EbikD9eoiG-N/view?usp=sharing'
      },
      {
        text: 'Professional face',
        link: 'https://www.linkedin.com/in/adriannehlee/'
      },
      {
        text: 'Casual 280 characters',
        link: 'https://twitter.com/adriannehlee'
      }
    ],
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Zoom
          in={!this.state.open}
          // unmountOnExit
        >
          <Button
            variant="fab"
            color="primary"
            aria-label="Connect"
            className={classes.floatingButton}
            onClick={this.handleOpen}
          >
            Connect
          </Button>
        </Zoom>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={{ display: 'flex', fontFamily: 'PT Sans' }}
        >
          <ModalContents>
            <div>
              <ProfileImg src={profileImg} alt="Adrianne H. Lee" />
              <Header>Connect</Header>
              <LinksList>
                {this.state.links.map(link => (
                  <Link key={link.text.toString()}>
                    <a
                      style={{ color: 'black' }}
                      href={link.link}
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  </Link>
                ))}
              </LinksList>
            </div>
            <IconButton
              onClick={this.handleClose}
              className={classes.closeButton}
              aria-label="Close"
            >
              <CloseIcon
                style={{ transform: 'scale(1.5)', color: 'rgba(0,0,0,0.8)' }}
              />
            </IconButton>
          </ModalContents>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(Connect);
