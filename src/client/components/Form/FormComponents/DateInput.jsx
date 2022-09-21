import React, {useState, useEffect} from 'react';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const YEARS = [...Array(10)].map((item, i) => (2014 + i));

const DateInput = ({dateHandler}) => {
  const [date, setDate] = useState({
    start_month: '',
    start_year: '',
    end_month: '',
    end_year: '',
  });

  const updateDate = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const newDate = {name: value};
    setDate((date) => ({
      ...date,
      ...newDate
    }));
  };

  return (
    <>
    Start
      <label htmlFor='form-start-month'>
        month
        <select
          id='form-start-month'
          name='start_month'
          value={date.start_month}
          onChange={updateDate}
        >
          {
            MONTHS.map((month, i) => (
              <option key={i}>{month}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor='form-start-year'>
        year
        <select
          id='form-start-year'
          name='start_year'
          value={date.start_year}
          onChange={updateDate}
        >
          {
            YEARS.map((year, i) => (
              <option key={i}>{year}</option>
            ))
          }
        </select>
      </label>

    End
      <label htmlFor='form-end-month'>
        month
        <select
          id='form-end-month'
          name='end_month'
          value={date.end_month}
          onChange={updateDate}
        >
          <option>Present</option>
          {
            MONTHS.map((month, i) => (
              <option key={i}>{month}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor='form-end-year'>
        year
        <select
          id='form-end-year'
          name='end_year'
          value={date.end_year}
          onChange={updateDate}
        >
          <option>Present</option>
          {
            YEARS.map((year, i) => (
              <option key={i}>{year}</option>
            ))
          }
        </select>
      </label>
    </>
  );
};

export default DateInput;
