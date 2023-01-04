import React from 'react'
import { useParams } from 'react-router-dom'

import Food from '../components/Food';

import data from '../data/data.json'

function FoodDetails() {

  const { id } = useParams();

  const currentItem = id;

  //console.log(currentItem);

  const filteredItem = data.filter(element => currentItem.includes(element.id))

  return (
    <div>
        <h2>Food {id}</h2>
        <div>
        {filteredItem.map((item, index) => (
            <div key={index}>
                {/* <Food title={item.title} price={item.price} image={item.image} type={item.type}/> */}
                <h1>{item.type}</h1>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FoodDetails