import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin: 0;
  font-size: 54px;
`;
const LinksList = styled.ul`
  margin-top: 0px;
  padding: 0px;
`;
const Link = styled.li`
  list-style-type: none;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
  line-height: 1.5em;
  & a:hover {
    background-color: #8fff00;
  }
`;

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
    ]
  };
  render() {
    return (
      <div>
        <Header>Connect</Header>
        <LinksList>
          {this.state.links.map(link => (
            <Link key={link.text.toString()}>
              <a style={{ color: 'black' }} href={link.link} target="_blank">
                {link.text}
              </a>
            </Link>
          ))}
        </LinksList>
      </div>
    );
  }
}

export default Connect;
