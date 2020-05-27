import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='navi'>
      <div className='navi__logo'>
        <NavLink exact to='/' activeClassName=''>
          Rahony
        </NavLink>
      </div>
      <div className='slidein__open'>
        <img src='/images/menu.svg' alt='' />
      </div>
      <ul className='navi__links'>
        <li className='navi__links__item'>
          <NavLink exact to='/about' activeClassName=''>
            About
          </NavLink>
        </li>
        <li className='navi__links__item'>
          <NavLink exact to='/service' activeClassName=''>
            Our Services
          </NavLink>
        </li>
        <li className='navi__links__item'>
          <NavLink exact to='/lodge' activeClassName=''>
            Lodge
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
