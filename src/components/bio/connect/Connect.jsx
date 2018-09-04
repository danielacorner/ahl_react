import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  listItem: {
    listStyleType: 'none'
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
        link: ''
      },
      {
        text: 'Professional face',
        link: ''
      },
      {
        text: 'Casual 280 characters',
        link: ''
      }
    ]
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Connect</h2>
        <ul>
          {this.state.links.map(link => (
            <li key={link.text.toString()} className={classes.listItem}>
              <a href={link.link} target="_blank">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Connect);
