import React from 'react'
import Content from '../Content/Content'
import CarouselComponent from '../CarouselComponent/CarouselComponent'

const Card = () => {
  return (
    <>
        <div className='my-5 w-full'>
          <ul className='w-auto list-disc mx-10 text-violet-400'>
            <li><h2 className='font-semibold text-violet-600 text-lg'>Block 1: Exploring Careers</h2></li>
            <li><Content/></li>
            <li><Content/></li>
            <li><Content/></li>
          </ul>
          <ul className='w-auto list-disc mx-10 text-black my-5'>
          <li><h2 className='font-semibold text-black text-lg'>Block 1: Exploring Careers</h2></li>
            <li><Content/></li>
            
          </ul>
          
        </div>
    </>
    
  )
}

export default Card