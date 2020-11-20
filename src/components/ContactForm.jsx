import React from 'react';
import useContact from '../hooks/useContact';
import validate from '../hooks/validateContact';
import './contactform.scss';

// TODO: scss styles
// TODO: Manage SUBMIT with Firebase

const ContactForm = () => {
  const initialForm = {
    name: '',
    date: '',
    email: '',
    phone: '',
    postcode: '',
  };
  const { handleChange, handleSubmit, values, errors, reset } = useContact(
    submit,
    validate,
    initialForm
  );

  function submit() {
    console.log(values.name, values.email, values.date);
    console.log('Submitted Succesfully');
    reset();
  }

  return (
    <section className='container-form'>
      <form onSubmit={handleSubmit} noValidate id='loginform'>
        <div className='form-item'>
          <label>Name</label>
          <div>
            <input
              id='name'
              className={`${errors.name && 'inputError'}`}
              name='name'
              type='text'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className='error'>{errors.name}</p>}
          </div>
        </div>

        <div className='form-item'>
          <label>Date of Birth</label>
          <div>
            <input
              id='date'
              className={`${errors.date && 'inputError'}`}
              name='date'
              type='date'
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && <p className='error'>{errors.date}</p>}
          </div>
        </div>

        <div className='form-item'>
          <label>Email</label>
          <div>
            <input
              id='email'
              className={`${errors.email && 'inputError'}`}
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
        </div>

        <div className='form-item'>
          <label>Phone number</label>
          <div>
            <input
              id='phone'
              className={`${errors.phone && 'inputError'}`}
              name='phone'
              type='phone'
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className='error'>{errors.phone}</p>}
          </div>
        </div>

        <div className='form-item'>
          <label>Postcode and First line of Address</label>
          <div>
            <input
              id='postcode'
              className={`${errors.postcode && 'inputError'}`}
              name='postcode'
              type='text'
              value={values.postcode}
              onChange={handleChange}
            />
            {errors.postcode && <p className='error'>{errors.postcode}</p>}
          </div>
        </div>

        <div className='checkbox'>
          <h3>I'm Interested in * :</h3>
          <input
            className='checkbox-item'
            name='c1'
            type='checkbox'
            value='Cosmetic Dentristry'
            onChange={handleChange}
            // checked
          />
          {' Cosmetic Dentistry '}
          <input
            className='checkbox-item'
            name='c2'
            type='checkbox'
            value='Braces'
            onChange={handleChange}
          />
          {' Braces '} <br />
          <input
            className='checkbox-item'
            name='c3'
            type='checkbox'
            value='Whitening'
            onChange={handleChange}
          />
          {' Whitening '}
          <input
            className='checkbox-item'
            name='c4'
            type='checkbox'
            value='Implants'
            onChange={handleChange}
          />
          {' Implants '}
          <input
            className='checkbox-item'
            name='c5'
            type='checkbox'
            value='Other'
            onChange={handleChange}
          />
          {' Other '}
        </div>

        <button type='submit' className='btn btn-form'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
