import React, {useState, useEffect} from 'react';
import {CgAddR} from 'react-icons/cg';

import TextInput from './FormComponents/TextInput.jsx';
import TextArea from './FormComponents/TextArea.jsx';
import DateInput from './FormComponents/DateInput.jsx';

import './Form.css';

const dataSchema = {
  name: '',
  link: '',
  client: '',
  client_url: '',
  date: '',
  short: '',
  info: '',
  tech: [],
  photos: [],
};

const Form = ({project, submitHandler}) => {
  // console.log(project)
  const [formData, setFormData] = useState(project);
  const [newDate, setNewDate] = useState({});
  const [newTech, setNewTech] = useState('');
  const [newPhoto, setNewPhoto] = useState('');

  useEffect(() => {
    setFormData(project);
  }, [project]);

  const submitForm = (event) => {
    event.preventDefault();
    // console.log(formData);
    submitHandler(formData);
  };

  const inputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const updatedInput = {[name]: value};
    console.log(name, value)
    setFormData((formData) => ({
      ...formData,
      ...updatedInput,
    }));
  };

  const updateDate = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const newDate = formData.date;
    newDate[name] = value;
    setFormData((formData) => ({
      ...formData,
      date: newDate,
    }));
  };

  const updateTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    console.log(name, value)
    setNewTech(value);
  };

  const addTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const {tech} = formData;
    if (newTech) {
      tech.push(newTech);
      setNewTech('');
      setFormData((formData) => ({
        ...formData,
        tech: tech,
      }))
    }
  };

  const updatePhoto = () => {
    event.preventDefault();
    const {name, value} = event.target;
    console.log(name, value)
    setNewPhoto(value);
  };

  const addPhoto = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const {photos} = formData;
    if (newPhoto) {
      photos.push(newPhoto);
      setNewPhoto('');
      setFormData((formData) => ({
        ...formData,
        photos: photos,
      }))
    }
  };

  const getDate = (date) => {
    console.log(date);
  };

  return (
    <div className='Form'>

      <div className='form-header'>
        <label id="submit-form-label" htmlFor='submit-form'>SAVE</label>
      </div>

      <div className='form-content'>
        <form onSubmit={submitForm}>
          <input type='submit' id='submit-form' />

          {/* Project Info */}
          <div className='form-section'>
            <TextInput
              id={'form-name'}
              name={'name'}
              value={formData.name}
              changeHandler={inputChange}
            />
            <TextInput
              id={'form-client'}
              name={'client'}
              value={formData.client}
              changeHandler={inputChange}
            />
            <TextInput
              id={'form-client_url'}
              name={'client_url'}
              value={formData.client_url}
              changeHandler={inputChange}
            />
            <TextInput
              id={'form-short'}
              name={'short'}
              value={formData.short}
              changeHandler={inputChange}
            />
            <TextArea
              id={'form-info'}
              name={'info'}
              rows={8}
              cols={20}
              value={formData.info}
              changeHandler={inputChange}
            />
          </div>

          {/* Project Data */}
          <div className='form-section'>

            <div className='form-date'>

              <DateInput dateHandler={getDate} />

              {/* <label htmlFor='form-start-month'>
                Start Month
                <select
                  id='form-start-month'
                  name='start-month'
                  value={formData.date['start-month']}
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
                Start Year
                <select
                  id='form-start-year'
                  name='start-year'
                  value={formData.date['start-year']}
                  onChange={updateDate}
                >
                  {
                    YEARS.map((year, i) => (
                      <option key={i}>{year}</option>
                    ))
                  }
                </select>
              </label>

              <label htmlFor='form-end-month'>
                End Month
                <select
                  id='form-end-month'
                  name='end-month'
                  value={formData.date['end-month']}
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
                End Year
                <select
                  id='form-end-year'
                  name='end-year'
                  value={formData.date['end-year']}
                  onChange={updateDate}
                >
                  <option>Present</option>
                  {
                    YEARS.map((year, i) => (
                      <option key={i}>{year}</option>
                    ))
                  }
                </select>
              </label> */}

            </div>

            <div className='form-tech-tags'>
              <div className='form-tech-input'>
                <label htmlFor='form-tech'>
                  Tech
                  <input
                    id='form-tech'
                    type='text'
                    name='tech'
                    placeholder='tech'
                    value={newTech}
                    onChange={updateTag}
                  />
                </label>
                <div onClick={addTag}>
                  <CgAddR size={40}/>
                </div>
              </div>

              <div className='form-tech-list'>
                {
                  formData.tech.map((tag, i) => {
                    return (
                      <a href='#' key={i}>{tag}</a>
                    )
                  })
                }
              </div>
            </div>
            <div className='form-photos'>
              <div className='form-photos-input'>
                <label htmlFor='form-photo'>
                  Photos
                  <input
                    id='form-photo'
                    type='text'
                    name='photos'
                    placeholder='img url'
                    value={newPhoto}
                    onChange={updatePhoto}
                  />
                </label>
                <div onClick={addPhoto}>
                  <CgAddR size={40}/>
                </div>
              </div>

              <div className='form-photos-list'>
                {
                  formData.photos.map((photo, i) => {
                    return (
                      <div key={i} className='form-photo-thumb'>
                        <img src={photo}/>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

