import React from 'react'
import { useParams } from 'react-router-dom'

function FoodDetails() {

  const { id, title } = useParams();

  return (
    <div>
        <h2>Food {id}</h2>
        <p>{title}</p>
    </div>
  )
}

export default FoodDetails