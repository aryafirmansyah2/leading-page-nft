import React from 'react';
import Feature from '../../components/feature/Feature';
import Hero from '../../assets/Group 72.svg'
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className='info section__padding'>
  <div className='info_page'>
    <h1>
      How do Music NFTs work?
    </h1>
    <p>
      NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music 
      content that cannot be counterfeited
    </p>
  </div>
  <div className='hero_image'>
    <img src={Hero} />
  </div>
  <span className='circle'></span>
  </div>
);

export default WhatGPT3;