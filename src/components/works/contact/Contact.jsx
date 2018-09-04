import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },

  contactButton: {
    display: 'inline-block'
  },
  span: {
    display: 'inline-block'
  },

  container: {},
  textField: { display: 'block' },
  textFieldMultiline: {}
});

class Contact extends Component {
  state = {
    open: false,
    name: '',
    email: '',
    message: ''
  };

  // modal
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // textarea
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.contactButton}
          onClick={this.handleOpen}
        >
          Get in touch
        </Button>
        <span className={classes.span}>for the full work sample document.</span>

        <Modal
          // aria-labelledby="contact-modal"
          // aria-describedby="contact-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Get in touch
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
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
              />
            </form>
            <Button
              variant="outlined"
              color="primary"
              className={classes.sendButton}
              onClick={this.handleOpen}
            >
              Send
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
