import React, { useEffect } from 'react';
import Head from './Head';
import './Homepage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    const places = document.querySelectorAll(
      '.group--places .group__list__item'
    );
    const expCards = document.querySelectorAll(
      '.group--places .group__list__item__explore'
    );

    places.forEach((place, i) => {
      place.addEventListener('mouseenter', () => {
        expCards[i].classList.remove('hidden');
      });
      expCards[i].addEventListener('mouseleave', () => {
        expCards[i].classList.add('hidden');
      });
    });
  }, []);
  return (
    <div className='homepage'>
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
        <Link to='/lodge'>
          <div className='lodging__btn'>Pricing</div>
        </Link>
      </div>
      <div className='group group--facilities'>
        <Head content='Our Facilities' />
        <div className='group__list '>
          <div className='group__list__item'>
            <div className='group__list__item__cover'>
              <img
                src='/images/ac.svg'
                alt='air condition'
                className='group__list__item__img'
              />
            </div>
            <div className='group__list__item__text'>
              <div className='group__list__item__text__title'>
                Air Condition
              </div>
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
                alt='media'
                className='group__list__item__img'
              />
            </div>
            <div className='group__list__item__text'>
              <div className='group__list__item__text__title'>Media</div>
              <div className='group__list__item__text__content'>
                Stay relaxed as you are entertained with music while on your
                trip.
              </div>
            </div>
          </div>
          <div className='group__list__item'>
            <div className='group__list__item__cover'>
              <img
                src='/images/luggage.svg'
                alt='luggage'
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
          <Link to='/places/jibowu'>
            <div className='group__list__item'>
              <img
                src='/images/lagos2.jpg'
                alt='lagos'
                className='group__list__item__img'
              />
              <div className='group__list__item__explore hidden'>
                <div className='group__list__item__explore__text'>
                  Explore Lagos
                </div>
                <div className='group__list__item__explore__button'>
                  Explore
                </div>
              </div>
            </div>
          </Link>
          <Link to='/places/tunde idiagbon'>
            <div className='group__list__item'>
              <img
                src='/images/abuja.jpg'
                alt='abuja'
                className='group__list__item__img'
              />
              <div className='group__list__item__explore hidden'>
                <div className='group__list__item__explore__text'>
                  Explore Abuja
                </div>
                <div className='group__list__item__explore__button'>
                  Explore
                </div>
              </div>
            </div>
          </Link>
          <Link to='/places/water line'>
            <div className='group__list__item'>
              <img
                src='/images/portharcourt1.jpg'
                alt='port harcourt'
                className='group__list__item__img'
              />
              <div className='group__list__item__explore hidden'>
                <div className='group__list__item__explore__text'>
                  Explore Port Harcourt
                </div>
                <div className='group__list__item__explore__button'>
                  Explore
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
