import React from 'react'
import { Link } from 'react-router-dom'

import Food from '../components/Food'

import data from '../data/data.json'

function FoodList() {
  return (
    <div className='grid grid-cols-1 place-items-center lg:grid-cols-4 gap-4 pt-5 lg:px-48'>
          {data.map((item, index) => (
            <div key={index}>
              <Link to={`/fodd/${item.id}`}> 
                <Food title={item.title} price={item.price} image={item.image} type={item.type}/>
              </Link>
            </div>
          ))}
    </div>
  )
}

export default FoodList