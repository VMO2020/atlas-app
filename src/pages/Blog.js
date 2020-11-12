import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import './blog.scss';

import { ReactComponent as Icon } from '../icons/braces.svg';
import { ReactComponent as Icon2 } from '../icons/healthy-tooth.svg';
import { ReactComponent as Icon3 } from '../icons/facebook.svg';
import { ReactComponent as Icon4 } from '../icons/instagram.svg';
import { ReactComponent as Icon5 } from '../icons/twitter.svg';
import { ReactComponent as Icon6 } from '../icons/youtube.svg';
import { ReactComponent as Icon7 } from '../icons/close.svg';
import { ReactComponent as Icon8 } from '../icons/menu.svg';
import { ReactComponent as Icon9 } from '../icons/call.svg';
import { ReactComponent as Icon10 } from '../icons/placeholder.svg';

export const Blog = () => {
  return (
    <div className='general__container blog'>
      <header>
        <NavBar menuName='blog' />
      </header>

      <h1>ATLAS Blog</h1>
      <h2 className='text__gradient2'>Dental & Cosmetic Alliance</h2>
      <h3>SubTitle h3</h3>
      <h4>SubTitle h4</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta vitae
        eligendi reiciendis totam minima, ipsa, suscipit commodi asperiores
        deleniti, dolor ipsum quod cum consequatur labore repudiandae quisquam
        assumenda quia?
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
      </div>
    </div>
  );
};
