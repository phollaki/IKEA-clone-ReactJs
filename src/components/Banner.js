import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__left'>
        <img src='/ikea-logo.png' className='banner__left-logo' />
      </div>
      <div className='banner__right'>
        <h1 className='banner__right-title'>Go shopping &rarr;</h1>
        <hr className='banner__right-hr' />
        <p className='banner__right-paragraph'>Online store: &nbsp; <b>ikea.hu</b> &nbsp; &uarr;</p>
      </div>
    </div>
  );
}

export default Banner;
