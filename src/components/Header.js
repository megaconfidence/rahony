import React, { useRef, useEffect } from 'react';
import './Header.scss';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';
import Slidein from './Slidein';

const Header = ({ location: { pathname } }) => {
  const path = pathname.replace('/', '');
  const content = {
    home: 'Safe rides to anywhere in Nigeria and West Africa.',
    service: 'Our Services',
    about: 'About Us',
    contact: 'Contact Us'
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
    <header className='header'>
      <Slidein
        ref={{
          slidein,
          slideinClose
        }}
      />
      <Nav ref={slideinOpen} />
      <div className='jumbo'>{content[path] || content['home']}</div>
    </header>
  );
};
export default withRouter(Header);
