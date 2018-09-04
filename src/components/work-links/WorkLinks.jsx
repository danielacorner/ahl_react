import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sticky from 'react-sticky-el';
import Media from 'react-media';

const styles = {};

class WorkLinks extends Component {
  state = {
    title: 'Work Preview 2017-18',
    innerHtml: `Here is a sample of challenges I had the pleasure of working on in 2017-18. 
    It’s only a preview, please <a href="#">get in touch</a> for the full work sample document.`,
    links: [
      {
        text: 'House of Commons Intranet',
        link: ''
      },
      {
        text: 'UX Lead at Global Affairs Canada',
        link: ''
      },
      {
        text: 'Pave: Canadian Job Explorer',
        link: ''
      }
    ]
  };

  render() {
    const { title, links } = this.state;
    return (
      <div>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              // mobile
              <div>
                <h2>{title}</h2>
                <div className="innerHtml" />
                <ul>
                  {links.map(link => (
                    <li key={link.text.toString()}>
                      <a href={link.link}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // tablet & desktop
              <Sticky>
                <h2>{title}</h2>
                <div className="innerHtml" />
                <ul>
                  {links.map(link => (
                    <li key={link.text.toString()}>
                      <a href={link.link}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </Sticky>
            )
          }
        </Media>
      </div>
    );
  }
  componentDidMount() {
    document.querySelector('.innerHtml').innerHTML = this.state.innerHtml;
  }
}

export default withStyles(styles)(WorkLinks);
