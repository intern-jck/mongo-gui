import React, {useState, useEffect} from 'react';
import {CgAddR} from 'react-icons/cg';

import './Form.css';

const dataSchema = {
  name: '',
  link: '',
  client: '',
  client_url: '',
  date: {
    start: '',
    end: ''
  },
  short: '',
  info: '',
  tech: [],
  photos: [],
}

const Form = ({project, submitHandler}) => {
  // console.log(project)
  const [formData, setFormData] = useState(project);
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

  const addTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const {tech} = formData;
    console.log(newTech);

    if (newTech) {
      console.log(newTech);
      tech.push(newTech);
      setFormData((formData) => ({
        ...formData,
        ...tech,
      }))
    }
  }

  const getTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    console.log(name, value)
    setNewTech(value);
  };

  const getPhoto = () => {
    console.log('photo')
  }

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
            <label htmlFor='form-name'>
              Name
              <input
                id='form-name'
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={inputChange}
              />
            </label>
            <label htmlFor='form-client'>
              Client
              <input
                id='form-client'
                type='text'
                name='client'
                placeholder='client'
                value={formData.client}
                onChange={inputChange}
              />
            </label>
            <label htmlFor='form-client_url'>
              Client URL
              <input
                id='form-client_url'
                type='text'
                name='client_url'
                placeholder='client_url'
                value={formData.client_url}
                onChange={inputChange}
              />
            </label>
            <label htmlFor='form-short'>
              Short
              <input
                id='form-short'
                type='text'
                name='short'
                placeholder='short'
                value={formData.short}
                onChange={inputChange}
              />
            </label>
            <label htmlFor='form-info'>
              Info
              <textarea
                id='form-info'
                name='info'
                placeholder='info'
                // rows='20'
                // cols='80'
                value={formData.info}
                onChange={inputChange}
                />
            </label>
          </div>

          {/* Project Data */}
          <div className='form-section'>
            <div className='form-date'>
              <label htmlFor='form-start-month'>
                Start Month
                <select id='form-start-month'>
                  <option>MONTH</option>
                </select>
              </label>
              <label htmlFor='form-start-year'>
                Start Month
                <select id='form-start-year'>
                  <option>YEAR</option>
                </select>
              </label>
              <label htmlFor='form-end-month'>
                End Month
                <select id='form-end-month'>
                  <option>MONTH</option>
                </select>
              </label>
              <label htmlFor='form-end-year'>
                End Year
                <select id='form-end-year'>
                  <option>YEAR</option>
                </select>
              </label>
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
                    onChange={getTag}
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
              <label htmlFor='form-photos-input'>
                Photos
                <input
                  id='form-photos-input'
                  type='text'
                  name='photos'
                  placeholder='img url'
                  onChange={inputChange}
                />
              </label>
              <CgAddR size={40}/>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Form;