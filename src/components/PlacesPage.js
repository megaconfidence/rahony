import React, { useEffect } from 'react';
import './PlacesPage.scss';
import Head from './Head';
import { Link } from 'react-router-dom';

const PlacesPage = () => {
  const places = [
    {
      img: 'lagos2.jpg',
      city: 'Jibowu',
      state: 'Lagos'
    },
    {
      img: 'lagos.jpg',
      city: 'Ejigbo',
      state: 'Laogs'
    },
    {
      img: 'portharcourt1.jpg',
      city: 'Water Line',
      state: 'Port Harcourt'
    },
    {
      img: 'portharcourt2.jpg',
      city: 'Oil Mill',
      state: 'Port Harcourt'
    },
    {
      img: 'abuja.jpg',
      city: 'Tunde Idiagbon',
      state: 'Abuja'
    },
    {
      img: 'imo.jpg',
      city: 'Owerri',
      state: 'Imo'
    },
    {
      img: 'bayelsa.jpg',
      city: 'Yenogoa',
      state: 'Bayelsa'
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='placespage'>
      <p>Lovely places across Nigeria where you can get our services.</p>
      <Head content='Explor Places' />
      <div className='places'>
        {places.map((p, k) => (
         <Link className={'grid'+(k+1)} key={k} to={`/places/${p.city.toLowerCase()}`}> <div className='pcard'>
         <div
           className='pcard__top'
           style={{ backgroundImage: `url(/images/${p.img})` }}
         ></div>
         <div className='pcard__bottom'>
           <div className='pcard__bottom__city'>{p.city}</div>
           <div className='pcard__bottom__state'>{p.state}</div>
           <div className='pcard__bottom__btn'>Explore</div>
         </div>
       </div></Link>
        ))}
      </div>
    </div>
  );
};
export default PlacesPage;
