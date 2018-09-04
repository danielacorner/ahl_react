import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CTAContainer = styled.div`
width: 450px;
display: flex;
height: 100%;
margin: -5px auto 55px auto;
@media only screen and (min-width: 992px) {
  margin: -45px auto 15px auto;

  }
`;
const Span = styled.span`
  margin: auto 0 auto 10px;
  font-size: 18px;
`;
const ModalContents = styled.div`
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.9);
  margin: auto;
  width: 80%;
  height: auto;
`;
const ModalTitle = styled.div`
  font-size: 72px;
  font-family: PT Sans;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`;
const styles = theme => ({
  modal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '125px'
  },
  contactButton: {
    display: 'inline-block',
    textTransform: 'none',
    fontFamily: 'PT Sans',
    height: '62px',
    width: '152px',
    fontSize: '18px'
  },
  textField: { display: 'block', backgroundColor: '#F1F1F1',
  },
  textFieldMultiline: { backgroundColor: '#F1F1F1' },
  sendButton: {
    marginTop: '23px',
    textTransform: 'none',
    height: '49px',
    width: '101px',
    fontSize: '18px'
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
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
    formSubmitted: false,
  };

  // modal
  handleOpen = () => {
    this.setState({ open: true });
    // document.querySelectorAll('label').style.left = '15px'
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = (event) => {
    event.preventDefault()

    const receiverEmail = "adriannehlee@gmail.com",
      template = "adrianneportfolio"

    this.sendEmail(template, this.state.email, receiverEmail, this.state.message)

    this.setState({formSubmitted: true})
  };

  // textarea
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  
  sendEmail = (templateId, senderEmail, receiverEmail, message) => {
     window.emailjs.send(
      'gmail',
      templateId,
      {
        senderEmail,
        receiverEmail,
        message
      })
      .then(res => {
        this.setState({ open: false })
        window.alert("Thanks for reaching out!")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send email. Error: ', err))
  }


  render() {
    const { classes } = this.props;

    return <CTAContainer>
        <Button id="btnGetInTouch" size="large" variant="outlined" color="primary" className={classes.contactButton} onClick={this.handleOpen}>
          Get in touch
        </Button>
        <Span>for the full work sample document.</Span>

        <Modal open={this.state.open} onClose={this.handleClose} style={{ display: 'flex' }}>
          <ModalContents>
            <div className={classes.modal}>
              <IconButton onClick={this.handleClose} className={classes.closeButton} aria-label="Close">
                <CloseIcon style={{ transform: 'scale(1.5)' }} />
              </IconButton>
              <ModalTitle>Get in touch</ModalTitle>
              <form action="mailto:danielcorner7@gmail.com?subject=subject&body=body" method="post" encType="text/plain" noValidate autoComplete="off">
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" fullWidth={true} />
                <TextField id="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal" fullWidth={true} />
                <TextField id="message" label="Message" multiline rows="10" className={classes.textFieldMultiline} value={this.state.message} onChange={this.handleChange('message')} margin="normal" fullWidth={true} />
              </form>
              <ButtonContainer>
                <div className="spacer" />
                <Button id="sendButton" variant="outlined" color="primary" className={classes.sendButton} type="submit" onClick={this.handleSubmit}>
                  {this.state.formSubmitted ? "Sending..." : "Send"}
                </Button>
              </ButtonContainer>
            </div>
          </ModalContents>
        </Modal>
      </CTAContainer>;
  }
}

export default withStyles(styles)(Contact);
