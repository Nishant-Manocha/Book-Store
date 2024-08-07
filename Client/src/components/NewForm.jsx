import React, { useState } from 'react';
import './NewForm.css';

export const NewForm = (props) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => 
  {
    setFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  const SubmitHandler = (event) => 
  {
    event.preventDefault(); 
    const newBlog = 
    {
      name: name,
      images: file ? URL.createObjectURL(file) : '',
      description: desc,
    };
    props.saveProduct(newBlog);
    setName('');
    setDesc('');
    setFile(null);
  };
  
  return (
    <div className='new-form-container'>
      <div className="new-form-heading-container">
        <div className="new-form-horizontal-line"></div>
        <h2 className="blog-heading">Enter New Blog Data</h2>
      </div>
      <form onSubmit={SubmitHandler} className='new-form'>
        <div>
          <input 
            type='text' 
            value={name}
            onChange={(event) => setName(event.target.value)} 
            placeholder='Enter Name' 
            className='new-form-input'
          />
        </div>
        <div>
          <input 
            type='file' 
            onChange={handleFileChange} 
            className='new-form-input'
          />
        </div>
        <div>
          <textarea 
            value={desc}
            onChange={(event) => setDesc(event.target.value)} 
            placeholder='Enter Description'
            className='new-form-input'
            id='new-form-textarea'
          />
        </div>
        <div>
          <button type='submit'>Insert the Data</button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
