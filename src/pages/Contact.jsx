import React from 'react';
import LoginForm from '../components/LoginForm';
import { NavBar } from '../components/NavBar';
import './contact.scss';

export const Contact = () => {
  return (
    <div className='general__container contact'>
      <header>
        <NavBar menuName='homeOnly' />
      </header>

      <h1>ATLAS Contacts</h1>
      <h2>Dental & Cosmetic Alliance</h2>
      <LoginForm />
    </div>
  );
};
