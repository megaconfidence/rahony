import React from 'react';
import Head from './Head';
import './Homepage.scss';

const HomePage = () => {
  return (
    <div>
      <div className='group group--offer'>
        <Head content='What We Offer' />
        <div className='group__list '>
          <div className='group__list__item'>
            <img
              src='/images/bus.svg'
              alt='transportation'
              className='group__list__item__img'
            />
            <div className='group__list__item__text'>Transportation</div>
          </div>
          <div className='group__list__item'>
            <img
              src='/images/hotel.svg'
              alt='lodging'
              className='group__list__item__img'
            />
            <div className='group__list__item__text'>Lodging</div>
          </div>
          <div className='group__list__item'>
            <img
              src='/images/truck.svg'
              alt='logistics'
              className='group__list__item__img'
            />
            <div className='group__list__item__text'>Logistics</div>
          </div>
        </div>
      </div>
      <div className='lodging'>
        <div className='lodging__text'>
          <div className='lodging__text__title'>Lodging</div>
          <div className='lodging__text__content'>
            Enjoy comfort and rest in any of our affordable lodges.
          </div>
        </div>
        <div className='lodging__btn'>See Lodge Pricing</div>
      </div>
      <div className='group group--facilities'>
      <Head content='Our Facilities' />
        <div className='group__list '>
          <div className='group__list__item'>
            <div className='group__list__item__cover'>
              <img
                src='/images/ac.svg'
                alt='transportation'
                className='group__list__item__img'
              />
            </div>
            <div className='group__list__item__text'>
              <div className='group__list__item__text__title'>Air Condition</div>
              <div className='group__list__item__text__content'>
                Our air conditioned buses help keep you cool through out the
                duration of your trip.
              </div>
            </div>
          </div>
          <div className='group__list__item'>
            <div className='group__list__item__cover'>
              <img
                src='/images/media.svg'
                alt='lodging'
                className='group__list__item__img'
              />
            </div>
            <div className='group__list__item__text'>
              <div className='group__list__item__text__title'>Media</div>
              <div className='group__list__item__text__content'>
                Stay relaxed as you are entertained with either music or movies
                while on your trip.
              </div>
            </div>
          </div>
          <div className='group__list__item'>
            <div className='group__list__item__cover'>
              <img
                src='/images/luggage.svg'
                alt='logistics'
                className='group__list__item__img'
              />
            </div>
            <div className='group__list__item__text'>
              <div className='group__list__item__text__title'>Luggage</div>
              <div className='group__list__item__text__content'>
                Our buses can take as much luggage as you have and they will be
                safe as you go on your trip.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group group--places'>
      <Head content=' Explore Places' />
        <div className='group__list '>
          <div className='group__list__item'>
            <img
              src='/images/lagos.jpg'
              alt='transportation'
              className='group__list__item__img'
            />
            <div className='group__list__item__explore hidden'>
              <div className='group__list__item__explore__text'>Explore Lagos</div>
              <div className='group__list__item__explore__button'>Explore</div>
            </div>
          </div>
          <div className='group__list__item'>
            <img
              src='/images/abuja.jpg'
              alt='lodging'
              className='group__list__item__img'
            />
            <div className='group__list__item__explore hidden'>
              <div className='group__list__item__explore__text'>Explore Abuja</div>
              <div className='group__list__item__explore__button'>Explore</div>
            </div>
          </div>
          <div className='group__list__item'>
            <img
              src='/images/jos.jpg'
              alt='logistics'
              className='group__list__item__img'
            />
            <div className='group__list__item__explore hidden'>
              <div className='group__list__item__explore__text'>Explore Jos</div>
              <div className='group__list__item__explore__button'>Explore</div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default HomePage;
