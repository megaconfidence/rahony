import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className='loading'>
      <div
       className="loading__container"
      >
        <svg
          width='150px'
          height='150px'
          viewBox='0 0 32 32'
         
        >
          <circle
            cx='16'
            cy='16'
            fill='none'
            r='14'
            strokeWidth='4'
            style={{ stroke: 'var(--primary)', opacity: '0.2' }}
          ></circle>
          <circle
            cx='16'
            cy='16'
            fill='none'
            r='14'
            strokeWidth='4'
            style={{
              strokeDasharray: '80px',
              strokeDashoffset: '60px',
              stroke: 'var(--primary)',
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
