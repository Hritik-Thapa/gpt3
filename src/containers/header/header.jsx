import React from 'react'
import people from'../../assets/assets/people.png'
import ai from '../../assets/assets/ai.png'
import './header.css'
function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum placeat reiciendis dolore at sint minima illo! Cum, iusto? Quos omnis nulla dolor inventore fugit explicabo doloremque quasi aliquid dignissimos provident?</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__peaople'>
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header;