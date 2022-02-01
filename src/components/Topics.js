import React from 'react';
import './Topics.scss';

function Topics() {
  return (
    <div className='topics'>
      <div className='topics__box'>
        <img
          src='https://www.ikea.com/ext/ingkadam/m/6461fdd43ec2515/original/IKEA-Festival-Cover.jpg?f=s'
          alt=''
          className='topics__box-img'
        />
        <div className='topics__box-text'>
          <h1 className='topics__box-text-title'>Welcome to IKEA festival</h1>
          <p className='topics__box-text-arrow'>&rarr;</p>
        </div>
      </div>
      <div className='topics__box'>
        <img
          src='https://www.ikea.com/global/en/images/internationalsales_7dfd8b4ae0.jpg?f=xxxl'
          alt=''
          className='topics__box-img'
        />
        <div className='topics__box-text'>
          <h1 className='topics__box-text-title'>International sales</h1>
          <p className='topics__box-text-arrow'>&rarr;</p>
        </div>
      </div>
      <div className='topics__box'>
        <img
          src='https://www.ikea.com/global/en/images/aboutikea_0cea43798a.jpg?f=xxxl'
          alt=''
          className='topics__box-img'
        />
        <div className='topics__box-text'>
          <h1 className='topics__box-text-title'>About IKEA</h1>
          <p className='topics__box-text-arrow'>&rarr;</p>
        </div>
      </div>
      <div className='topics__box'>
        <img
          src='https://www.ikea.com/global/en/images/museum_1cdda3df28.jpg?f=xxxl'
          alt=''
          className='topics__box-img'
        />
        <div className='topics__box-text'>
          <h1 className='topics__box-text-title'>IKEA museum</h1>
          <p className='topics__box-text-arrow'>&rarr;</p>
        </div>
      </div>
    </div>
  );
}

export default Topics;
