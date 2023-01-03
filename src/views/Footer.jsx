import React from 'react'

import Logo from '../components/Logo'

function Footer() {
  return (
    <div className='flex fixed bottom-0 left-0 px-10 w-screen h-24 justify-evenly items-center bg-[#2A9D8F]'>
        <Logo />
        <ul>
            <h2>Our locations</h2>
            <li>New York</li>
            <li>New Jersey</li>
            <li>Chicago</li>
        </ul>
        <ul>
            <h2>Our locations</h2>
            <li>New York</li>
            <li>New Jersey</li>
            <li>Chicago</li>
        </ul>
    </div>
  )
}

export default Footer