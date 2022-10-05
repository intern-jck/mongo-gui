import React, {useState, useEffect} from 'react';

import TextInput from './FormComponents/TextInput.jsx';
import TextArea from './FormComponents/TextArea.jsx';
import DateInput from './FormComponents/DateInput.jsx';
import TagInput from './FormComponents/TagInput.jsx';
import PhotoInput from './FormComponents/PhotoInput.jsx';

import './Form.css';
import './FormComponents/FormComponents.css';

const Form = ({project, submitHandler}) => {
  const [formData, setFormData] = useState(project);
  const [newDate, setNewDate] = useState({});
  const [newTech, setNewTech] = useState('');
  const [newPhoto, setNewPhoto] = useState('');

  useEffect(() => {
    setFormData(project);
  }, [project]);

  const submitForm = (event) => {
    event.preventDefault();
    submitHandler(formData);
  };

  const inputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const updatedInput = {[name]: value};
    setFormData((formData) => ({
      ...formData,
      ...updatedInput,
    }));
  };

  const updateTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
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
    console.log('form', date);
    // TODO format date to create a single string?
    setFormData((formData) => ({
      ...formData,
      date: date,
    }));
  };

  return (
    <div className='Form'>
<<<<<<< HEAD
      <label id="submit-form-label" htmlFor='submit-form'>SAVE</label>
=======
>>>>>>> 83fbd0bf517968cd39f6e48d4c3b78fa37064b62
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
          <DateInput date={formData.date} dateHandler={getDate} />

          <TagInput
            id={'form-tech'}
            name={'tech'}
            value={newTech}
            tags={formData.tech}
            changeHandler={updateTag}
            tagHandler={addTag}
          />

          <PhotoInput
            id={'form-photo'}
            name={'photo'}
            value={newPhoto}
            photos={formData.photos}
            changeHandler={updatePhoto}
            photoHandler={addPhoto}
          />

        </div>
      </form>
    </div>
  );
};

export default Form;
