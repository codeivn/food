import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <h1  className='flex font-thin text-2xl text-white hover:text-3xl'>food.</h1>
    </Link>
  )
}

export default Logo