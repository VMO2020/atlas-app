import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { NavBar } from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import { Footer } from '../components/Footer';

// Helper
import Metadata from '../helper/metadata';

// Styles
import './blog.scss';

// Icons
import { ReactComponent as Icon } from '../icons/dental/braces.svg';
import { ReactComponent as Icon2 } from '../icons/dental/healthy-tooth.svg';
import { ReactComponent as Icon3 } from '../icons/social/facebook.svg';
import { ReactComponent as Icon4 } from '../icons/social/instagram.svg';
import { ReactComponent as Icon5 } from '../icons/social/twitter.svg';
import { ReactComponent as Icon6 } from '../icons/social/youtube.svg';
import { ReactComponent as Icon7 } from '../icons/nav/close.svg';
import { ReactComponent as Icon8 } from '../icons/nav/menu.svg';
import { ReactComponent as Icon9 } from '../icons/contact/call.svg';
import { ReactComponent as Icon10 } from '../icons/contact/placeholder.svg';
import { ReactComponent as Icon11 } from '../icons/contact/message.svg';
import { ReactComponent as Icon12 } from '../icons/contact/phone.svg';

// SEO
const meta = {
  title: '🦷 ATLAS BLOG',
  metaTitle: '🦷 ATLAS Dental Clinic Near You in Liverpool Blog',
  metaDescription:
    'ATLAS Dental & Cosmetic Alliance, qualified dental professionals, free consultations, teeth whitening, dental implant, clip in veneers, emergency dental, 6 month smile, tooth bonding, braces overbite, signature smile',
  metaKeywords: 'Dentist in Liverpool Dental Treatments',
};

export const Blog = () => {
  // Render Meta Tags (helper)
  Metadata(meta);

  return (
    <div className='general__container blog'>
      <header>
        <NavBar menuName='blog' />
      </header>
      <main>
        <h1 id='home'>ATLAS Blog</h1>
        <h2 className='text__gradient2'>Dental & Cosmetic Alliance</h2>
        <h3>SubTitle h3</h3>
        <h4>SubTitle h4</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta
          vitae eligendi reiciendis totam minima, ipsa, suscipit commodi
          asperiores deleniti, dolor ipsum quod cum consequatur labore
          repudiandae quisquam assumenda quia?
        </p>
        <div className='btn-container'>
          <Link to='/specialized-in' className='btn btn-main'>
            Treatments
          </Link>
          <Link to='/team' className='btn btn-main-ol'>
            Team
          </Link>
          <Link to='/contact' className='btn btn-main-ol-a'>
            Contact
          </Link>
        </div>

        <div className='svc__icon blog__icon'>
          <Icon />
          <Icon2 />
          <Icon3 />
          <Icon4 />
          <Icon5 />
          <Icon6 />
          <Icon7 />
          <Icon8 />
          <Icon9 />
          <Icon10 />
          <Icon11 />
          <Icon12 />
        </div>
      </main>
      <LoginForm />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
