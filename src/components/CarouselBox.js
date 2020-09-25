import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import forestSnow from '../assets/images/forest-snow.jpg'
import forest from '../assets/images/forest.jpg'

export default class CarouselBox extends React.Component {

  render() {

    return (
      <Carousel>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={forestSnow}
            alt="Forest Snow"
            height="900"
          />
          <Carousel.Caption>
            <h3>Forest snow image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={forest}
            alt="Forest"
            height="900"
          />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim.</p>
          </Carousel.Caption>
        </CarouselItem>
        
      </Carousel>
    )
  }
}