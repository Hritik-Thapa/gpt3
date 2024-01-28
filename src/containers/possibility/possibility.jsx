import React from 'react'
import possibilityIamge from  '../../assets/assets/possibility.png'
import './possibility.css'
function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possitiblity'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityIamge} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique tempore distinctio, quos autem doloremque aspernatur sed </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;