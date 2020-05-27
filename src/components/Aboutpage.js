import React from 'react';
import './Aboutpage.scss';
import Head from './Head';
const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <p className='summary'>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est eopksiolaborum. Sed ut perspiciat
        isunde omnis istpoe natus error sit voluptatem accusantium doloremque
        eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunot explicabo. Nemo
        ernim ipsam. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est eopksiolaborum. Sed ut
        perspiciat isunde omnis istpoe natus error sit voluptatem accusantium
        doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunot
        explicabo. Nemo ernim ipsam.
      </p>
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
                src='/images/user.svg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Surname</span>
                <span className='name__firstname'>Name</span>
              </div>
              <div className='position'>Exec’s Position</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/user.svg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Surname</span>
                <span className='name__firstname'>Name</span>
              </div>
              <div className='position'>Exec’s Position</div>
            </div>
          </div>
        </div>
        <div className='section__row'>
          {' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/user.svg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Surname</span>
                <span className='name__firstname'>Name</span>
              </div>
              <div className='position'>Exec’s Position</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/user.svg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Surname</span>
                <span className='name__firstname'>Name</span>
              </div>
              <div className='position'>Exec’s Position</div>
            </div>
          </div>{' '}
          <div className='person'>
            <div className='person__cover'>
              <img
                src='/images/user.svg'
                alt='executive'
                className='person__cover__img'
              />
            </div>
            <div>
              <div className='name'>
                <span className='name__surname'>Surname</span>
                <span className='name__firstname'>Name</span>
              </div>
              <div className='position'>Exec’s Position</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
