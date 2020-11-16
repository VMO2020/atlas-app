import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../hooks/validateLogin';
import './loginform.scss';

// TODO: Add Password 2 and validate
// TODO: scss styles
// TODO: Manage SUBMIT with Firebase

const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors, reset } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Submitted Succesfully');
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className='form-item'>
          <label>Name</label>
          <div>
            <input
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
          <label>Email</label>
          <div>
            <input
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
          <label>Password</label>
          <div>
            <input
              className={`${errors.password && 'inputError'}`}
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
        </div>
        <div className='form-item'>
          <label>Password2</label>
          <div>
            <input
              className={`${errors.password2 && 'inputError'}`}
              name='password2'
              type='password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className='error'>{errors.password2}</p>}
          </div>
        </div>
        <button type='submit' className='btn btn-form'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
