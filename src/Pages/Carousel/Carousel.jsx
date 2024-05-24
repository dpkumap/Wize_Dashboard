import React from 'react'
import NavBar from '../../Componants/NavBar/NavBar'
import CarouselComponent from '../../Componants/CarouselComponent/CarouselComponent'

const Carousel = () => {
  return (
    <>
    
        <NavBar/>
        <div className="carousel-container flex justify-center items-center mt-40 px-4">
        <CarouselComponent />
      </div>

    </>
  )
}

export default Carousel