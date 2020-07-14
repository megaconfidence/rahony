import React, { useRef, useEffect } from 'react';
import './Header.scss';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';
import Slidein from './Slidein';

const Header = ({ location: { pathname } }) => {
  const path = pathname.replace('/', '');
  const main = {
    home: 'Safe rides to anywhere in Nigeria',
    about: 'About Us',
    places: 'Places',
    contact: 'Contact Us',
    lodge: 'Our Lodge Prices',
    'places/jibowu': 'The Centre of Excellence',
    'places/ejigbo': 'The Centre of Excellence',
    'places/water line': 'The Treasure Base',
    'places/oil mill': 'The Treasure Base',
    'places/tunde idiagbon': 'Federal Capital Territory',
    'places/owerri': 'The Eastern Heartland',
    'places/yenogoa': 'The Glory of all Lands',
  };
  const sub = {
    'places/jibowu': 'Lagos',
    'places/ejigbo': 'Lagos',
    'places/water line': 'Rivers',
    'places/oil mill': 'Rivers',
    'places/tunde idiagbon': 'Abuja',
    'places/owerri': 'Imo',
    'places/yenogoa': 'Bayelsa',
  };
  const img = {
    'places/jibowu': 'lagos2.jpg',
    'places/ejigbo': 'lagos.jpg',
    'places/water line': 'portharcourt1.jpg',
    'places/oil mill': 'portharcourt2.jpg',
    'places/tunde idiagbon': 'abuja.jpg',
    'places/owerri': 'imo.jpg',
    'places/yenogoa': 'bayelsa.jpg',
  };
  const slidein = useRef(null);
  const slideinClose = useRef(null);
  const slideinOpen = useRef(null);
  useEffect(() => {
    slideinOpen.current.addEventListener('click', () => {
      slidein.current.classList.remove('slidein--bg');
      slidein.current.classList.add('slidein--active');
    });
    slideinClose.current.addEventListener('click', () => {
      slidein.current.classList.remove('slidein--active');
      slidein.current.classList.add('slidein--bg');
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/images/${img[path] || 'city.jpg'})`
      }}
      className={`header__overlay ${path ? 'small' : ''}`}
    >
      <div
        className={`header ${path ? 'small' : ''}`}
        style={{ background: `${img[path] ? 'rgba(1, 30, 2, 0.92)' : ''}` }}
      >
        <Slidein
          ref={{
            slidein,
            slideinClose
          }}
        />
        <Nav ref={slideinOpen} />
        <div className='jumbo'>
          <div className='main'>{main[path] || main['home']}</div>
          <div className='sub'>{sub[path] || sub['home']}</div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
