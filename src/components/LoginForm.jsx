import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../hooks/validateLogin';
import './form.scss';

const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Submitted Succesfully');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
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
        <div>
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
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && 'inputError'}`}
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
