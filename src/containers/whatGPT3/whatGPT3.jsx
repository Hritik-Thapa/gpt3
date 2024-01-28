import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components';
function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sequi aspernatur ducimus, beatae dicta libero, provident et accusamus sed exercitationem sint odio vitae, quasi ad est iure adipisci! Neque, ullam?'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className=''>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature  title='Chatbots' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repudiandae alias cumque hic officiis vero, ducimus laboriosam tempora reprehenderit et?'/>
        <Feature title='Knowledgebase' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repudiandae alias cumque hic officiis vero, ducimus laboriosam tempora reprehenderit et?'/>
        <Feature title='Education' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repudiandae alias cumque hic officiis vero, ducimus laboriosam tempora reprehenderit et?'/>
      </div>
    </div>
  )
}

export default WhatGPT3;