import React from 'react';
import './LodgePage.scss';

const LodgePage = () => {
  return (
    <div className='lodgePage'>
      <table>
        <tr>
          <th>Room Type</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Standard Room</td>
          <td>&#8358; 3,500</td>
        </tr>
        <tr>
          <td>Medium Room</td>
          <td>&#8358; 4,500</td>
        </tr>
        <tr>
          <td>Executive Room</td>
          <td>&#8358; 5,500</td>
        </tr>
      </table>
      <div className='note'>
        Please note, Lodging is currently only available at our Jibowu terminal
      </div>
    </div>
  );
};

export default LodgePage;
