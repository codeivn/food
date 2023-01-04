import React from 'react'
import { useParams } from 'react-router-dom'
import Button2 from '../components/Button2';

import Food from '../components/Food';

import data from '../data/data.json'

function FoodDetails() {

  const { id } = useParams();

  const currentItem = id;

  //console.log(currentItem);

  const filteredItem = data.filter(element => currentItem.includes(element.id))

  return (
    <div className='flex flex-col justify-center items-center pt-52 md:'>
      <div>
        {filteredItem.map((item, index) => (
            <div>
                {/* <Food title={item.title} price={item.price} image={item.image} type={item.type}/> */}
                <img src={item.image} className='h-72 w-96 rounded-t-xl' />
                <h1 className='text-3xl text-black font-thin'>{item.title}</h1>
                <p className='text-2xl text-grey font-thin'>{item.price} $</p>
                <p className='text-sm font-thin py-5'>{item.description}</p>
            </div>
          ))}</div>
          <div className='flex flex-row'>
            <Button2 title="Order now"/>
            <Button2 title="More"/>
          </div>
          
    </div>
  )
}

export default FoodDetails