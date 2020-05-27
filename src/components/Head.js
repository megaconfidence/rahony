import React from 'react';
import './Head.scss'

const Head = ({ content }) => {
  return (
    <div className='head'>
      {content}
      <hr className='head__hr' />
    </div>
  );
};

export default Head;
