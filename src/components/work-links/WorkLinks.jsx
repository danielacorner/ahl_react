import React, { Component } from 'react';
import Sticky from 'react-sticky-el';
import Media from 'react-media';
import styled from 'styled-components';

const Header = styled.h2`
  font-weight: normal;
  margin: 28px 0 0 0;
  font-size: 36px;
  @media only screen and (min-width: 992px) {
    margin: 0;
    font-size: 54px;
  }
`;
const WorkLinksList = styled.ul`
  list-style-type: none;
  padding: 0px;
  line-height: 1.5em;
  margin-bottom: 28px;
`;
const WorkLink = styled.li`
  font-size: 18px;
  margin: 0.5em 0;
`;
const WorkPreviewText = styled.div`
  font-size: 18px;
  margin: 0.5em 0 2em 0;
`;
const LinkButton = styled.span`
cursor: pointer;
text-decoration: underline;
&:hover {
  background-color: #8FFF00;
}
`
const getInTouchSpanStyles = `
cursor: pointer;
text-decoration: underline;
`

class WorkLinks extends Component {
  state = {
    title: 'Work Preview 2017-18',
    innerHtml: `Here is a sample of challenges I had the pleasure of working on in 2017-18. 
    It’s only a preview, please <span id='getInTouchSpan' style='${getInTouchSpanStyles}' onclick="document.querySelector('#btnGetInTouch').click()">get in touch</span> for the full work sample document.`,
    links: [
      {
        text: 'House of Commons Intranet',
        id: '1'
      },
      {
        text: 'UX Lead at Global Affairs Canada',
        id: '2'
      },
      {
        text: 'Pave: Canadian Job Explorer',
        id: '3'
      }
    ]
  };

  handleClick = (id) => {
    document.querySelector("#work"+id).scrollIntoView({block: "start", behavior: 'smooth'})
  }

  render() {
    const { title, links } = this.state;
    return (
      <div>
        <Media query="(max-width: 991px)">
          {matches =>
            matches ? ( // mobile
              <div>
                <Header>{title}</Header>
                <WorkPreviewText className="innerHtml" />
                <WorkLinksList>
                  {links.map(link => (
                    <WorkLink key={link.text.toString()}>
                      <LinkButton onClick={() => this.handleClick(link.id)}>{link.text}</LinkButton>
                    </WorkLink>
                  ))}
                </WorkLinksList>
              </div> // tablet & desktop
            ) : (
              <Sticky>
                <Header>{title}</Header>
                <WorkPreviewText className="innerHtml" />
                <WorkLinksList>
                  {links.map(link => (
                    <WorkLink key={link.text.toString()}>
                      <LinkButton onClick={() => this.handleClick(link.id)}>{link.text}</LinkButton>
                    </WorkLink>
                  ))}
                </WorkLinksList>
              </Sticky>
            )
          }
        </Media>
      </div>
    );
  }
  componentDidMount() {
    document.querySelector('.innerHtml').innerHTML = this.state.innerHtml;

    // adding hover effect to "get in touch" span
    const GITspan = document.querySelector('#getInTouchSpan');

    GITspan.addEventListener('mouseover', () => {
      GITspan.style.backgroundColor = '#8FFF00';
    }) 
    GITspan.addEventListener('mouseout', () => {
      GITspan.style.backgroundColor = null;
    }) 
  }
}

export default WorkLinks;
