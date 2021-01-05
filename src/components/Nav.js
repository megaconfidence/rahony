import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = forwardRef((_, ref) => {
  return (
    <nav className='navi'>
      <div className='navi__logo'>
        <NavLink exact to='/' activeClassName=''>
          Rahony
        </NavLink>
      </div>
      <div className='slidein__open' ref={ref}>
        <img src='/images/menu.svg' alt='' />
      </div>
      <ul className='navi__links'>
        <li className='navi__links__item'>
          <NavLink exact to='/booking' activeClassName='active'>
            Booking
          </NavLink>
        </li>
        <li className='navi__links__item'>
          <NavLink to='/places' activeClassName='active'>
            Places
          </NavLink>
        </li> <li className='navi__links__item'>
          <NavLink exact to='/about' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li className='navi__links__item'>
          <NavLink exact to='/lodge' activeClassName='active'>
            Lodge
          </NavLink>
        </li>
        <li className='navi__links__item'>
          <NavLink exact to='/contact' activeClassName='active'>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;
