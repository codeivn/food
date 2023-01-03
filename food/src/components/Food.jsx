import React from 'react'

import Button2 from './Button2'

import burger from '../assets/images/burger.jpg'

function Food({ title, price, image }) {
  return (
    <div className='h-56 w-56 mx-10 border-b-4'>
        <img src={image} className='rounded-t-xl' />
        <div className='flex flex-row justify-evenly items-center py-4'>
            <p className='text-base font-thin'>{title} - {price}$</p>
            <Button2 title="Order" />
        </div>
    </div>
  )
}

export default Food