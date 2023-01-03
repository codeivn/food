import React from 'react'

function Button({ title }) {
  return (
    <button className='flex border border-white p-1 px-5 mx-2 rounded-xl text-white hover:bg-white hover:text-black'>{title}</button>
  )
}

export default Button