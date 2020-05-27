import React from 'react';
import './Header.scss';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';

const Header = ({ location: { pathname } }) => {
  const path = pathname.replace('/', '');
  const content = {
    home: 'Safe rides to anywhere in Nigeria and West Africa.',
    service: 'lorem ipsum'
  };
  return (
    <header className='header'>
      <Nav />
      <div className='jumbo'>{content[path] || content['home']}</div>
    </header>
  );
};
export default withRouter(Header);
