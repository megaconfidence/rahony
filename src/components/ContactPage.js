import React from 'react';
import './ContactPage.scss';
const ContactPage = () => {
  return (
    <div className='contact'>
      <p>We are always available to assist you. Our Omni-Channel contact centre agents are available 24/7 to support you. We prioritize requests about our service or your experience above everything else.</p>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/map.svg' alt='map' />
        </div>
        <div className='detail__items'>
          <div>101 Jibowu, Yaba</div>
          <div>Lagos State</div>
        </div>
      </div>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/phone.svg' alt='phone' />
        </div>
        <div className='detail__items'>
          <div>+2348023456789</div>
          <div>+2348023456789</div>
        </div>
      </div>
      <div className='detail'>
        <div className='detail__icon'>
          <img src='/images/mail.svg' alt='mail' />
        </div>
        <div className='detail__items'>
          <div>Info@rahony.com</div>
          <div>support@rahony.com</div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
