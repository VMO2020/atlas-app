import React from 'react';

// helper
import { year } from '../helper/date';

// Styles
import './footer.scss';

export const Footer = () => {
  // const today = new Date();
  // const date = today.getFullYear();

  return (
    <div className='footer'>
      <div className='footer__open'>
        <strong>
          We are open Monday, Wednesday & Friday from 9.00am to 5.00pm
        </strong>
        <br />
        <strong>Tuesday & Thursday from 9.00am to 7.00pm</strong>
      </div>
      <p>Copyright © ATLAS DENTAL & COSMETIC ALLIANCE. All Right Reserved</p>
      <p>Web design by VMOG {year}</p>
    </div>
  );
};
