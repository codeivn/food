import React from 'react'
import Button from '../components/Button'

import Logo from '../components/Logo'

function Header() {
  return (
    <div className='flex h-24 justify-evenly items-center px-10 bg-[#2A9D8F]'>
        <Logo />
        <div className='flex flex-row'>
            <Button title="Explore"/>
            <Button title="Prices"/>
        </div>
    </div>
  )
}

export default Header