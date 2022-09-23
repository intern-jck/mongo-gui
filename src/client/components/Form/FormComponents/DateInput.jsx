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

  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  // useEffect(() => {
  //   // dateHandler(date);
  // }, [date]);

  const updateDate = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const newDate = date;
    newDate[name] = value;
    setDate(newDate);
    console.log('NEW DATE', newDate)
      dateHandler(date);
  };

  return (
    <div className='DateInput'>
      <div className='date-row'>
        <span>
          START:
        </span>
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
                <option key={i} value={month}>{month}</option>
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
      </div>

      <div className='date-row'>
        <span>
          END:
        </span>
        <label htmlFor='form-start-month'>
          month
          <select
            id='form-start-month'
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

        <label htmlFor='form-start-year'>
          year
          <select
            id='form-start-year'
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
      </div>
    </div>
  );
};

export default DateInput;
