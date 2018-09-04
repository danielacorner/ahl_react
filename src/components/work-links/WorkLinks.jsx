import React, { Component } from 'react';

export default class WorkLinks extends Component {
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
    const { title, innerHtml, links } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <p>{innerHtml}</p>
        <ul>
          {links.map(link => (
            <li key={link.text.toString()}>
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
