import React from 'react';
import './ContactPage.scss';
const ContactPage = () => {
  return (
    <div className='contact'>
      <p>
        We are always available to assist you. Our omni-channel contact centre
        agents are available 24/7 to support you. We prioritize requests about
        our service or your experience above everything else.
      </p>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/map.svg' alt='map' />
        </div>
        <div className='detail__items'>
          <div>29, Ikorodu Road, Jibowu Bus Stop</div>
          <div>Lagos State</div>
        </div>
      </div>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/phone.svg' alt='phone' />
        </div>
        <div className='detail__items'>
          <div>09036771159</div>
          <div>09036771160</div>
        </div>
      </div>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/mail.svg' alt='mail' />
        </div>
        <div className='detail__items'>
          <div>
            <a href='mailto:rahony@yahoo.com'>rahony@yahoo.com</a>
          </div>
          <div>
            {/* <a href='mailto:rahony@yahoo.com'>rahony@yahoo.com</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
