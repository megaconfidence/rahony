import Head from './Head';
import './Bookingpage.scss';
import Loading from './Loading';
import React, { useEffect, useState } from 'react';
import parsePhoneNumber from 'libphonenumber-js';

const Bookingpage = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(1);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [departure, setDeparture] = useState('');
  const [ticketLink, setTicketLink] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const backendURL = process.env.REACT_APP_BACKEND;

    const data = {
      date,
      name,
      seats,
      departure,
      destination,
      phone: parsePhoneNumber(phone, 'NG')
        .formatInternational()
        .replace(/\s/g, ''),
    };

    const response = await fetch(backendURL + '/api/booking', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setLoading(false);
    const res = await response.json();

    if (response.status === 200) {
      setTicketLink(backendURL + res.data.pdfpath);
    } else {
      const list = [];
      const errObj = res.error[0];
      for (const key in errObj) {
        list.push(errObj[key]);
      }
      setError(list);
    }
  };

  if (error.length) {
    return (
      <div className='bookingpage'>
        <Head content='An Error Occured' />
        <ul>
          {error.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (ticketLink) {
    return (
      <div className='bookingpage'>
        <Head content='Download Your Ticket' />
        <p>Click the button bellow to download your ticket</p>
        <p>
          <strong>
            You will need to present the ticket at the bus station
          </strong>
        </p>
        <div>
          <a
            download
            target='_blank'
            href={ticketLink}
            rel='noopener noreferrer'
          >
            <input type='button' value='Download Ticket' />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className='bookingpage'>
      {loading ? <Loading /> : null}
      <Head content='Fill Out The Form' />
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            required
            type='text'
            value={name}
            maxLength='50'
            autoComplete='true'
            placeholder='Your name'
            onChange={({ target }) => {
              setName(target.value);
            }}
          />
        </label>
        <label>
          <span>Departure</span>
          <select
            value={departure}
            required
            onChange={({ target }) => {
              setDeparture(target.value);
            }}
          >
            <option value=''>Select departure</option>
            <option value='lagos'>Lagos</option>
            <option value='port harcourt'>Port harcourt</option>
            <option value='abuja'>Abuja</option>
            <option value='imo'>Imo</option>
            <option value='bayelsa'>Bayelsa</option>
          </select>
        </label>{' '}
        <label>
          <span>Destination</span>
          <select
            value={destination}
            required
            onChange={({ target }) => {
              setDestination(target.value);
            }}
          >
            <option value=''>Select destination</option>
            <option value='lagos'>Lagos</option>
            <option value='port harcourt'>Port harcourt</option>
            <option value='abuja'>Abuja</option>
            <option value='imo'>Imo</option>
            <option value='bayelsa'>Bayelsa</option>
          </select>
        </label>
        <label>
          <span>Seats</span>
          <input
            type='number'
            value={seats}
            onChange={({ target }) => {
              setSeats(target.value);
            }}
            min='1'
            max='20'
          />
        </label>
        <label>
          <span>Date</span>
          <input
            required
            type='date'
            value={date}
            onChange={({ target }) => {
              setDate(target.value);
            }}
            min={new Date().toISOString().split('T')[0]}
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            required
            type='tel'
            value={phone}
            placeholder='07010020030'
            pattern='(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)'
            onChange={({ target }) => {
              setPhone(target.value);
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Bookingpage;
