import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './Header.scss';

function Header() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  });

  return (
    <div className='header'>
      <AiOutlineMenu className='header__hamburger' />
      <img
        src='/ikea-logo.png'
        className={`header__logo ${
          show ? 'header__logo-active' : 'header__logo-inactive'
        }`}
      />
    </div>
  );
}

export default Header;
