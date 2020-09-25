import React from 'react'
import CarouselBox from '../components/CarouselBox'
import Cards from '../components/Cards'
export default class Home extends React.Component {

  render() {

    return (
      <div>
        <CarouselBox />
        <Cards />
      </div>
    )
  }
}