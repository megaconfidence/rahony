import React from 'react';
import { NavLink } from 'react-router-dom';
import './Slidein.scss';

const Slidein = () => {
  return (
    <div className='slidein'>
      <div className='slidein__navi'>
        <ul className='slidein__navi__links'>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/about' activeClassName=''>
              About
            </NavLink>
          </li>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/service' activeClassName=''>
              Our Services
            </NavLink>
          </li>
          <li className='slidein__navi__links__item'>
            <NavLink exact to='/lodge' activeClassName=''>
              Lodge
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='slidein__close'></div>
    </div>
  );
};

export default Slidein;
