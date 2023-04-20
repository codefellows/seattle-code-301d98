import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Photo extends React.Component {
  render() {


    // Destructure your props and store the rest of the props in the rest parameters. The ...rest is going to hold all of the behind the scene props coming in from the Carousel parent
    const {
      key, pic, ...rest
    } = this.props

    // Bring in the {...rest} params on the Carousel.Item
    return (
      <Carousel.Item {...rest} key={key}>
        <img
          className="d-block w-100"
          src={pic.src}
          alt={pic.alt}
        />
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>Photo by: {pic.username}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }
}

export default Photo;