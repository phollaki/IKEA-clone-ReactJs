import React from 'react';
import './Inspiration.scss';

function Inspiration() {
  return (
    <div className='inspiration'>
      <h1 className='inspiration__title'>
        A world of inspiration for your home
      </h1>
      <img src='/ikea-logo2.png' className='inspiration__logo' alt='' />
      <div className='inspiration__nav'>
        <p>About us</p>
        <p>|</p>
        <p>Life at home </p>
        <p>|</p>
        <p>Sustainability</p>
        <p>|</p>
        <p>Ethics & Integrity</p>
        <p>|</p>
        <p>Work with us</p>
        <p>|</p>
        <p>Newsroom</p>
      </div>
    </div>
  );
}

export default Inspiration;
