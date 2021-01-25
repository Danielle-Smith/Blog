import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



function Contact() {
    let history = useHistory();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  
    const validate = () => {
      let err = {};
      if (!form.name) {
        err.name = 'Name is required';
      }
      if (!form.email) {
        err.email = 'Email is required';
      }
      if (!form.message) {
        err.message = 'Message is required';
      }
  
      return err;
    }


    const handleChange = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    const postNotes = async (data) => {
      await fetch('https://dds-blogdb.herokuapp.com/contact-form', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      

    }
  
    const handleSubmit = async e => {
      e.preventDefault();
      const errs = validate();
  
      if (Object.keys(errs).length === 0) {
        setIsSubmitting(true)
        await postNotes(form);
        setIsSubmitting(false);
        setForm({ name: '', email: '', message: '' })
        history.push('/message');
      } else {
        showError(errs);
      }
  
    };
  
    const showError = (errorObj) => {
      let errMsg = '';
      for (let err in errorObj) {
        errMsg += `${errorObj[err]}. `
      }
      alert(`Errors ${errMsg}`);
    }

  
    return (
      <div className='contact'>
        
        <div className='container' >
          {
            isSubmitting
              ?
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              : ''
          }
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='form-group'>
                <label>Name</label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  onChange={handleChange}
                  value={form.name}
                  placeholder='Name'
                />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  className='form-control'
                  onChange={handleChange}
                  value={form.email}
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <label>Message</label>
                <textarea
                  className='form-control'
                  name='message'
                  onChange={handleChange}
                  value={form.message}
                  placeholder='Message...'
                  id='exampleTextarea'
                  rows='3'
                ></textarea>
              </div>
            </fieldset>
            <button type="submit" className="contact-btn">Submit</button>
          </form>
          
        </div>
      </div>
    );
  }
export default Contact;