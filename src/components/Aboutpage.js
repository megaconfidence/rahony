import React from 'react';
import './Aboutpage.scss';
import Head from './Head';
const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <div className='summary'>
        <p>
          Rahony Travels Executive offers quinessentral inter-state mass
          movement of passengers and goods from its head office in Lagos to
          different locations in Nigeria to meet the needs of its growing
          customers since April, 2006. Our consistency has enabled us to carve a
          niche as a safe, reliable and responsive transport company. We offer
          hire-delivery services to many parts of the country to our various
          clients with fully air conditioned busses.
        </p>

        <p>
          Our terminals are well located for strategic reasons which have
          enabled us to become a recurrent feature in transport services in
          Nigeria for comfort and convenience. Passengers lodge at affordable
          rate is provided in our Lagos terminal which is also available to
          members of the public, while a deliberate effort is being made to make
          this available in our other locations.
        </p>

        <p>
          Our online booking platform is a new initiative designed to adapt to
          present day needs and reach our numerous customers from their comfort
          zone, offering them incentives as it increase our share of the market.
        </p>

        <p>
          Inview of dynamics of road transportation in Nigeria, we are
          determined to consistently offer highly air conditioned sound busses
          with well trained drivers to meet the ever increasing need of the
          travelling public, and safe delivery of goods to desired destinations.
        </p>
      </div>
      <div className='section'>
        <Head content='Our Mission' />
        <p className='section__text'>
          Our mission is to provide safe and comfortable service to individuals,
          corporate organisations and the general public at large.
        </p>
      </div>
      <div className='section'>
        <Head content='Our Vision' />
        <p className='section__text'>
          To be a service provider in Nigeria most admired for its people,
          dedication, intergrity and performance.
        </p>
      </div>
      <div className='section'>
        <Head content='Our Executives' />

        <div className='section__row'>
          {' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/paul.jpg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Okoghenun</span>
                <span className='name__firstname'>Paul</span>
              </div>
              <div className='position'>MD/CEO</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/oluwole.jpg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Aremu</span>
                <span className='name__firstname'>Oluwole</span>
              </div>
              <div className='position'>General Manager</div>
            </div>
          </div>
        </div>
        <div className='section__row'>
          {' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/linda.jpg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Everestus</span>
                <span className='name__firstname'>Linda</span>
              </div>
              <div className='position'>Admin Manager</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/adeleke.jpg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Adejobi</span>
                <span className='name__firstname'>Adeleke</span>
              </div>
              <div className='position'>Logistics Supervisor</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/innocent.jpg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Okoye</span>
                <span className='name__firstname'>Innocent</span>
              </div>
              <div className='position'>Head of Operations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
