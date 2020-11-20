import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navbar.scss';

// Icons
import logoAtlas from '../icons/logoAtlas.svg';
import { ReactComponent as Close } from '../icons/nav/close.svg';
import { ReactComponent as Menu } from '../icons/nav/menu.svg';

export const NavBar = ({ menuName }) => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Read JSON Data
  const menu = require('../data/navbar.json');
  const dataMenu = menu.menu;

  const dataFilt = dataMenu.filter((list) => list.type === menuName);
  const data = dataFilt[0].data;

  // NAVBAR Background Change function
  useEffect(() => {
    const changeNavbarBackground = () => {
      // console.log(Math.round(window.scrollY));
      if (Math.round(window.scrollY) >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeNavbarBackground);

    // Unmount function
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);

  // MENU button Toggle
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <nav className={navbar ? 'navbar navbar__active' : 'navbar'}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='navbar__logo'>
          <img src={logoAtlas} alt='Logo' className='navbar__logo-icon' />
          <span className='text__gradient'>ATLAS</span>
        </div>
      </Link>
      <div className='navbar__toggle' onClick={handleClick}>
        {!showMenu && (
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <span>Contact us</span>
          </Link>
        )}
        {showMenu ? <Close /> : <Menu />}
      </div>

      <ul className={showMenu ? 'navbar__menu navbar__show' : 'navbar__menu'}>
        {data.map((item, index) => (
          <li key={index} className='navbar__menu-links'>
            <Link className='navbar__menu-link' to={item.src}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
