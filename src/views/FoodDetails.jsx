import React from 'react'
import { useParams } from 'react-router-dom'

function FoodDetails() {

  const { id } = useParams();

  return (
    <div>
        <h2>Food {id}</h2>
        <p>sssasasasasasasasasasasas</p>
    </div>
  )
}

export default FoodDetails