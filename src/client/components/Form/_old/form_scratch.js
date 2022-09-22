<label htmlFor='form-name'>
Name
<input
  id='form-name'
  className='onclick'
  type='text'
  name='name'
  placeholder='name'
  value={formData.name}
  onChange={inputChange}
/>
</label>










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




.Form h2 {
  font-size: xx-large;
}

.Form form {
  border: 4px solid black;
  margin: 1em;
  font-size: x-large;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
}

.Form input, label, textarea{
  /* border: 4px solid red; */
  font-size: x-large;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.Form select, option {
  font-size: x-large;
  display: block;
}

.form-name {
  /* border: 4px solid green; */
}

.form-date {
  /* border: 4px solid green; */
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.form-section {
  /* border: 4px solid blue; */
  display: flex;
  flex-direction: row;
  gap: 1em;
}



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
{
  formData.project_photos ?
  // formData.project_photos.map((photo, i) => (console.log(photo))) :
  console.log('RENDER', formData.project_photos) :
  null
}
<input
  type="file"
  name="project_photos"
  onChange={addPhoto}
/>
</div>


