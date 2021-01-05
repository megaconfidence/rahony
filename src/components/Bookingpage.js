import React, { useState } from 'react';
import './Bookingpage.scss';
import Head from './Head';

const Bookingpage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [seats, setSeats] = useState(1);
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, seats, phone, date });
  };
  return (
    <div className='bookingpage'>
      <Head content='Fill Out The Form' />
      <form onSubmit={handleSubmit}>
        <label>
          <span>From</span>
          <select
            value={from}
            required
            onChange={({ target }) => {
              setFrom(target.value);
            }}
          >
            <option value=''>Select origin</option>
            <option value='lagos'>Lagos</option>
            <option value='port harcourt'>Port harcourt</option>
            <option value='abuja'>Abuja</option>
            <option value='imo'>Imo</option>
            <option value='bayelsa'>Bayelsa</option>
          </select>
        </label>{' '}
        <label>
          <span>To</span>
          <select
            value={to}
            required
            onChange={({ target }) => {
              setTo(target.value);
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
            type='tel'
            value={phone}
            required
            placeholder='07010010010'
            pattern='[0-9]{11}'
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
