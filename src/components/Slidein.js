import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Slidein.scss';

const Slidein = forwardRef((_, ref) => {
  const { slidein, slideinClose } = ref;
  const closeNav = () => {
    slidein.current.classList.remove('slidein--active');
    slidein.current.classList.add('slidein--bg');
  };
  return (
    <div className='slidein' ref={slidein}>
      <div className='slidein__navi'>
        <ul className='slidein__navi__links'>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/' activeClassName='active' onClick={closeNav}>
              Home
            </NavLink>
          </li>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/about' activeClassName='active' onClick={closeNav}>
              About
            </NavLink>
          </li>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/lodge' activeClassName='active' onClick={closeNav}>
              Lodge
            </NavLink>
          </li>{' '}
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/contact' activeClassName='active' onClick={closeNav}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='slidein__close' ref={slideinClose}></div>
    </div>
  );
});

export default Slidein;
