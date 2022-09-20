import React, {useState} from 'react';
import './Form.css';

const dataSchema = {
  project_name: '',
  project_client: '',
  client_url: '',
  project_link: '',
  project_date: '',
  project_short: '',
  project_info: '',
  project_photos: [],
}

export default function Form() {
  const [formData, setFormData] = useState(dataSchema);
  const [projectName, setProjectName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    // Create project link
    // Create date range
    // Submit form data
  };

  const inputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const updatedInput = {[name]: value}
    setFormData((formData) => ({
      ...formData,
      ...updatedInput,
    }));
  };

  const addPhoto = (event) => {
    const {files} = event.target;
    console.log('FILES', files)

    const currentPhotos = formData.project_photos;
    console.log('CUR', currentPhotos)

    const photo = {
      name: files[0].name,
      type: files[0].type,
      lastModified: files[0].lastModified,
    }
    console.log('PHOTO', photo)
    const updatedPhotos = formData.project_photos.push(photo);
    const photos = {project_photos: updatedPhotos}
    console.log('PHOTOS', photos)

    // setFormData((formData) => ({
    //   ...formData,
    //   ...photos,
    // }));
  };

  return (
    <div className='Form'>
      <h2>Project Form</h2>

      <form onSubmit={submitForm}>

        <div className='form-section'>
          <label className='form-input form-name'>
            project_name
            <input type='text' name='project_name' value={formData.project_name} onChange={inputChange}/>
          </label>
          <div className='form-date'>
            <label className='form-input'>
              start_date
              <select name='start_date' value={formData.start_date} onChange={inputChange}>
                <option defaultValue value="January">January</option>
                <option value="Febuary">Febuary</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </label>
            <label className='form-input'>
              end_date
              <select name='end_date' value={formData.end_date} onChange={inputChange}>
                <option defaultValue value="Present">Present</option>
                <option value="January">January</option>
                <option value="Febuary">Febuary</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </label>
          </div>
        </div>

        <div className='form-section'>
          <label className='form-input'>
            project_client
            <input type='text' name='project_client' value={formData.project_client} onChange={inputChange}/>
          </label>
          <label className='form-input'>
            client_url
            <input type='text' name='client_url' value={formData.client_url} onChange={inputChange}/>
          </label>
        </div>

        <div className='form-section'>
          <label className='form-input'>
            project_short
            <input type='text' name='project_short' value={formData.project_short} onChange={inputChange}/>
          </label>
        </div>

        <div className='form-section'>
          <label className='form-input'>
            project_info
            <textarea name='project_info' rows='10' cols='100' value={formData.project_info} onChange={inputChange}/>
          </label>
        </div>

        <div className="form-section">
          {/* {
            formData.project_photos ?
            // formData.project_photos.map((photo, i) => (console.log(photo))) :
            console.log('RENDER', formData.project_photos) :
            null
          } */}
          <input
            type="file"
            name="project_photos"
            onChange={addPhoto}
          />
        </div>




        <input type='submit' value="SUBMIT"/>
      </form>
    </div>
  );
};
