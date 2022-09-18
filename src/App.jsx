import React, {useState} from 'react';
import './App.css';

const formDataModel = {
  name: '',
  group: '',
  url: '',
  link: '',
  startDate: '',
  endDate: '',
  short: '',
  info: '',
  techTags: [],
  photos: [],
}

export default function App() {
  const [] = useState('');
  const [] = useState('');
  const [] = useState('');
  const [formData, setFormData] = useState(formDataModel);

  const handleSubmit = () => {
    event.preventDefault();
    console.log('submit')
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value)
    setFormData({[name]: value})
  };

  return (
    <div className='App'>
      <h1>App Test Works!</h1>

      <form className='project-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label>
            Project Name
            <input name='name' type='text' value={formData.name} onChange={handleChange}/>
          </label>
          <label>
            Project Group
            <input name='group' type='text' value={formData.group} onChange={handleChange} />
          </label>
          <label>
            Group URL
            <input nae='url' type='text' />
          </label>
        </div>

        <div className='form-row'>
          <label>
            Project Start Date
            <select name='start-date'/>
          </label>
          <label>
            Project End Date
            <select name='end-date'/>
          </label>
        </div>

        <div className='form-row'>
          <label>
            Project Tech Tags
            <input name='tags' type='text' />
          </label>
        </div>

        <div className='form-row'>
          <label>
            Project Short
            <input name='short' type='text' />
          </label>
          <label>
            Project Info
            <textarea name='info'/>
          </label>
        </div>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
};
