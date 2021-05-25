import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



function Contact() {
  let history = useHistory();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

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
      await postNotes(form);
      setForm({ name: '', email: '', message: '' })
      setMessageSent(true);
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
        <form className="form" onSubmit={handleSubmit}>

          <fieldset>

            <div className='form-group'>
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
              <textarea
                className='form-control'
                name='message'
                onChange={handleChange}
                value={form.message}
                placeholder='Message...'
                id='exampleTextarea'
                rows='6'
              ></textarea>
            </div>

          </fieldset>

          <div className="contact-btn-wrapper">
            <button type="submit" className="contact-btn">Submit</button>
          </div>

          <div className="message">
            {messageSent ? "Message Sent. Thank you!" : ""}
          </div>

        </form>
      </div>
    </div>
  );
}
export default Contact;