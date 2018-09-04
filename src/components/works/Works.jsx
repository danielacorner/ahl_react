import React, { Component } from 'react';

class Works extends Component {
  state = {
    works: [
      {
        title: 'House of Commons Intranet',
        text:
          'House of Commons is in the process of redesigning Source, the intranet for Ministers of Parliament and their staff. The UX team at House of Commons defined the rough design strategy and Jumping Elephants was invited to facilitate the research and design activities.',
        images: [
          {
            src: 'https://picsum.photos/750/450',
            alt: 'Mouseover text for image 1'
          },
          {
            src: 'https://picsum.photos/750/450',
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
            alt: 'Mouseover text for image 1'
          },
          {
            src: 'https://picsum.photos/750/450',
            alt: 'Mouseover text for image 2'
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.works.map(work => (
          <div key={work.title.toString()}>
            <h3>{work.title}</h3>
            <p>{work.text}</p>
            {work.images.map(image => (
              <img key={image.alt.toString()} src={image.src} alt={image.alt} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Works;
