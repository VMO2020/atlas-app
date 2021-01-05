import React from 'react';

// Components
import { NavBar } from '../components/NavBar';
import ContactData from '../components/ContactData';
import ContactForm from '../components/ContactForm';
import { Footer } from '../components/Footer';

// Helpers
import Metadata from '../helper/metadata';

// Styles
import './contact.scss';

// SEO
const meta = {
  title: '🦷 ATLAS Contact',
  metaTitle: '🦷 ATLAS Dental Clinic Near You in Liverpool Blog',
  metaDescription:
    'ATLAS Dental & Cosmetic Alliance, qualified dental professionals, free consultations, teeth whitening, dental implant, clip in veneers, emergency dental, 6 month smile, tooth bonding, braces overbite, signature smile',
  metaKeywords: 'Dentist in Liverpool Dental Treatments',
};

export const Contact = () => {
  // Render Meta Tags (helper)
  Metadata(meta);

  return (
    <div className='general__container contact'>
      <header>
        <NavBar menuName='homeOnly' />
      </header>
      <main>
        {/* <h1>ATLAS Dental & Cosmetic Alliance</h1> */}
        <strong>CONTACT US</strong>
        <h5>We have appointments available for new patients</h5>
        <div className='contacts-box'>
          <ContactData />
          <ContactForm />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
