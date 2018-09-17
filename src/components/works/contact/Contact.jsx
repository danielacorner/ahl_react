import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Media from 'react-media';
import Breakpoints from '../../../Breakpoints';

// media queries: mobile-first, then tablet, then desktop
const CTAContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  margin: -40px auto 125px auto;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    margin: -40px auto 25px auto;
    display: flex;
    width: 450px;
  }
  @media only screen and ${Breakpoints.desktop.minWidth} {
    margin: -45px auto 15px auto;
  }
`;
const Span = styled.span`
  font-size: 18px;
  display: block;
  text-align: center;
  width: auto;
  margin: 15px 0 auto 10px;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    margin: auto 0 auto 10px;
  }
`;
const ModalContents = styled.div`
  background-color: white;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  padding: 47px 23px 87px 23px;
  width: 75%;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    padding: 125px;
    width: 60%;
  }
  div {
    margin-top: 0;
  }
  margin: auto;
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.9);
  height: auto;
`;

const ModalTitle = styled.div`
  font-family: PT Sans;
  font-size: 36px;
  margin-bottom: 5px;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    font-size: 72px;
  }
`;
const CloseButtonDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  @media only screen and ${Breakpoints.mobile.minWidth} {
    bottom: null;
    top: 20px;
  }
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`;
const styles = theme => ({
  getInTouchButton: {
    display: 'block',
    textTransform: 'none',
    fontFamily: 'PT Sans',
    height: '62px',
    width: '152px',
    fontSize: '18px',
    margin: '10px auto',
    border: '2px solid rgba(0,0,0,0.9)',
    borderRadius: '0px',
    color: 'black',
    '&:hover': {
      backgroundColor: '#ebebeb',
      border: '2px solid rgba(0,0,0,0.9)'
    },
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'

  },
  textField: {
    display: 'block',
    backgroundColor: '#F1F1F1'
  },
  textFieldMultiline: { backgroundColor: '#F1F1F1' },
  sendButton: {
    color: 'black',
    marginTop:
      window.innerWidth > Breakpoints.mobile.minWidthValue ? '23px' : '3px',
    textTransform: 'none',
    height: '49px',
    width: '101px',
    fontSize: '18px',
    border: '2px solid rgba(0,0,0,0.9)',
    borderRadius: '0px',
    fontFamily: 'PT Sans',
    '&:hover': {
      backgroundColor: '#ebebeb',
      border: '2px solid rgba(0,0,0,0.9)'
    },
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'
  },
  closeButton: {
    border: '2px solid rgba(0,0,0,0.9)',
    borderRadius: '100%'
  }
});

class Contact extends Component {
  state = {
    open: false,
    name: '',
    email: '',
    message: '',
    formSubmitted: false
  };

  // modal
  handleOpen = () => {
    this.setState({ open: true });
    // document.querySelectorAll('label').style.left = '15px'
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = event => {
    event.preventDefault();

    const receiverEmail = 'adriannehlee@gmail.com',
      template = 'adrianneportfolio';

    this.sendEmail(
      template,
      this.state.email,
      receiverEmail,
      this.state.message
    );

    this.setState({ formSubmitted: true });
  };

  // textarea
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  sendEmail = (templateId, senderEmail, receiverEmail, message) => {
    window.emailjs
      .send('gmail', templateId, {
        senderEmail,
        receiverEmail,
        message
      })
      .then(res => {
        this.setState({ open: false });
        window.alert('Thanks for reaching out!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send email. Error: ', err));
  };

  render() {
    const { classes } = this.props;

    return (
      <CTAContainer>
        <Button
          id="btnGetInTouch"
          size="large"
          variant="outlined"
          color="primary"
          className={classes.getInTouchButton}
          onClick={this.handleOpen}
        >
          Get in touch
        </Button>
        <Span>for the full work sample document.</Span>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={{ display: 'flex' }}
        >
          <ModalContents>
            <CloseButtonDiv>
              <IconButton
                onClick={this.handleClose}
                className={classes.closeButton}
                aria-label="Close"
              >
                <CloseIcon
                  style={{ transform: 'scale(1.5)', color: 'rgba(0,0,0,0.8)' }}
                />
              </IconButton>
            </CloseButtonDiv>
            <ModalTitle>Get in touch</ModalTitle>
            <form noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                fullWidth={true}
                required={true}
              />
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
                fullWidth={true}
                required={true}
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows="10"
                className={classes.textFieldMultiline}
                value={this.state.message}
                onChange={this.handleChange('message')}
                margin="normal"
                fullWidth={true}
                required={true}
              />
            </form>
            <ButtonContainer>
              <div className="spacer" />
              <Button
                id="sendButton"
                variant="outlined"
                color="primary"
                className={classes.sendButton}
                type="submit"
                onClick={this.handleSubmit}
              >
                {this.state.formSubmitted ? 'Sending...' : 'Send'}
              </Button>
            </ButtonContainer>
          </ModalContents>
        </Modal>
      </CTAContainer>
    );
  }
}

export default withStyles(styles)(Contact);
