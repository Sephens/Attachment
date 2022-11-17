import React from 'react'
import '../styles/my.css'
function card({name,phone,img}) {
  return (
    <div className='card-container'>
      <img src={img} className="card-img"/>
      <div className="desc-div">
      <h1 className='card-name'>Name: {name}</h1>
      <p className='card-phone'><span className='bold'>Phone:</span> {phone}</p>
      </div>
    </div>
  )
}

export default card
