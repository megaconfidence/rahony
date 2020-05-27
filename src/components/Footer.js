import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__image'>
        <img src='/images/cityscape.png' alt='' />
      </div>
      <div className='footer__links'>
        <div className='footer__links__item'>
          <div className='footer__links__item__title'>Company</div>
          <ul className='footer__links__item__link'>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/service'>Our Services</NavLink>
            </li>
            <li>
              <NavLink to='#'>Bus Terminals</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer__links__item'>
          <div className='footer__links__item__title'>Information</div>
          <ul className='footer__links__item__link'>
            <li>
              <NavLink to='#'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer__links__item'>
          <div className='footer__links__item__title'>Terms</div>
          <ul className='footer__links__item__link'>
            <li>
              <NavLink to='#'>Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to='#'>Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer__links__item'>
          <div className='footer__links__item__title'>Social Media</div>
          <ul className='footer__links__item__link'>
            <li>
              <NavLink to='#'>Facebook</NavLink>
            </li>
            <li>
              <NavLink to='#'>Twitter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
