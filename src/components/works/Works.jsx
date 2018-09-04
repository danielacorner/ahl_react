import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Contact from './contact/Contact';

const styles = {
  smallImage: {
    width: '100%'
  }
};
class Works extends Component {
  state = {
    open: false,
    currentImg: '',
    works: [
      {
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
        title: 'Another work',
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
    const { classes } = this.props;
    return (
      <div>
        {this.state.works.map(work => (
          <div key={work.title.toString()}>
            <h3>{work.title}</h3>
            <p>{work.text}</p>
            {work.images.map(image => (
              <img
                className={classes.smallImage}
                key={image.alt.toString()}
                src={image.src}
                alt={image.alt}
                onClick={() => this.handleOpen(image.largeImageURL)}
              />
            ))}
          </div>
        ))}
        <div>
          <Contact />
        </div>
        <Modal
          // actions={actions}
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

export default withStyles(styles)(Works);
