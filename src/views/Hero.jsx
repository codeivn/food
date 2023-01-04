import React from 'react'
import { Link } from 'react-router-dom'

import Button2 from '../components/Button2'
import Food from '../components/Food'

import data from '../data/data.json'

function Hero() {
  return (
    <div className=''>
        <h1 className='flex justify-center text-4xl font-thin py-10'>Explore our food offering</h1>
        <h1 className='flex justify-center text-2xl font-thin'>Choose food by category</h1>
        <div className='flex flex-row justify-center pb-10 pt-5'>
          <Button2 title="Pizza"/>
          <Button2 title="Burger"/>
          <Button2 title="Tortilla"/>
        </div>
        <div className='grid grid-cols-1 place-items-center lg:grid-cols-4 gap-4 pt-5 lg:px-48'>
          {data.map((item, index) => (
            <div key={index}>
              <Link to={`/food/${item.id}`}> 
                <Food title={item.title} price={item.price} image={item.image} type={item.type}/>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Hero