import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../hooks/validateContact';
import './contactform.scss';

// TODO: Manage SUBMIT with Firebase
// TODO: email form with EmailJs
// TODO: customize alert

const ContactForm = () => {
  const initialForm = {
    name: '',
    date: '',
    email: '',
    phone: '',
    postcode: '',
    message: '',
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
  };
  const {
    handleChange,
    handleSubmit,
    handleAllChecked,
    values,
    errors,
    reset,
  } = useForm(submit, validate, initialForm);

  function submit() {
    const data =
      'Name:  ' +
      values.name +
      '  DateOfBirth: ' +
      values.date +
      '  Email: ' +
      values.email +
      '  Phone: ' +
      values.phone +
      '  PC: ' +
      values.postcode +
      '  Interested: ' +
      `${values.c1 ? 'Cosmetic Dentistry' : ''}` +
      ' ' +
      `${values.c2 ? 'Braces' : ''}` +
      ' ' +
      `${values.c3 ? 'Whitening' : ''}` +
      ' ' +
      `${values.c4 ? 'Implants' : ''}` +
      ' ' +
      `${values.c5 ? 'Other' : ''}` +
      '   Message: ' +
      values.message;

    console.log('Submitted Succesfully');
    // alert('Submitted Succesfully');
    window.open(
      'mailto:victor.ottati@gmail.com?subject=ContactForm&body=' + data
    );
    reset();
  }

  return (
    <section className='container-form'>
      <form onSubmit={handleSubmit} noValidate id='loginform'>
        <div className='form-item'>
          <label>
            Name <small>*</small>
          </label>
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
          <label>
            Date of Birth <small>*</small>
          </label>
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
          <label>
            Email <small>*</small>
          </label>
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
          <label>
            Phone number <small>*</small>
          </label>
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
          <label>
            Postcode and First line of Address <small>*</small>
          </label>
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
          <h3>I'm Interested in:</h3>

          <input
            id='checkbox1'
            className='checkbox-item'
            name='c1'
            type='checkbox'
            value={values.check}
            onChange={handleAllChecked}
            // checked
          />
          <label htmlFor='checkbox1'>
            <span>✓</span>Cosmetic Dentistry
          </label>

          <input
            id='checkbox2'
            className='checkbox-item'
            name='c2'
            type='checkbox'
            value={values.check}
            onChange={handleAllChecked}
          />
          <label htmlFor='checkbox2'>
            <span>✓</span>Braces
          </label>

          <input
            id='checkbox3'
            className='checkbox-item'
            name='c3'
            type='checkbox'
            value={values.check}
            onChange={handleAllChecked}
          />
          <label htmlFor='checkbox3'>
            <span>✓</span>Whitening
          </label>
          <input
            id='checkbox4'
            className='checkbox-item'
            name='c4'
            type='checkbox'
            value={values.check}
            onChange={handleAllChecked}
          />
          <label htmlFor='checkbox4'>
            <span>✓</span>Implants
          </label>

          <input
            id='checkbox5'
            className='checkbox-item'
            name='c5'
            type='checkbox'
            value={values.check}
            onChange={handleAllChecked}
          />
          <label htmlFor='checkbox5'>
            <span>✓</span>Other
          </label>
        </div>

        <div className='form-item'>
          <label>
            Your Message <small>*</small>
          </label>
          <div>
            <textarea
              id='message'
              className={`${errors.message && 'inputError'}`}
              name='message'
              type='text'
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className='error'>{errors.message}</p>}
          </div>
        </div>

        <div className='bottom'>
          <button type='submit' className='btn btn-form'>
            Submit
          </button>
          <p> * Required</p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
