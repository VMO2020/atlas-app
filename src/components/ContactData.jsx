import React from 'react';
// Icons
import { ReactComponent as Icon10 } from '../icons/contact/placeholder.svg';
import { ReactComponent as Icon11 } from '../icons/contact/message.svg';
import { ReactComponent as Icon12 } from '../icons/contact/phone.svg';
// Styles
import './contactdata.scss';

const ContactData = () => {
  return (
    <div className='container-data'>
      <div className='box'>
        <span className='svc__icon'>
          <Icon10 />
        </span>
        <div className='text'>
          <h4>Address</h4>
          <p>
            Harringtone Chamber 26, North John Street, Liverpool, UK, L2 9RU
          </p>
        </div>
      </div>
      <div className='box'>
        <span className='svc__icon'>
          <Icon12 />
        </span>
        <div className='text'>
          <h4>Phone</h4>
          <p>+44 7932 310506</p>
        </div>
      </div>
      <div className='box'>
        <span className='svc__icon'>
          <Icon11 />
        </span>
        <div className='text'>
          <h4>Email</h4>
          <p>victor.ottati@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
