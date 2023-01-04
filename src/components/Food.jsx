import React from 'react'

import Button2 from './Button2'

function Food({ title, price, image, type }) {
  return (
    <div className='h-56 w-56 mx-10 border-b-4 shadow-2xl' id='type'>
        <img src={image} className='rounded-t-xl' />
        <div className='flex flex-row justify-evenly items-center py-4 px-2'>
            <p className='text-base font-thin'>{title} - {price}$</p>
            <Button2 title="Order" />
        </div>
    </div>
  )
}

export default Food