import React, { Component } from 'react';

export default class Connect extends Component {
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
    return (
      <div>
        <h1>Connect</h1>
        <ul>
          {this.state.links.map(link => (
            <li key={link.text.toString()}>
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
