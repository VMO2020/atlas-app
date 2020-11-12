import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logoAtlas from '../icons/logoAtlas.svg';
import { ReactComponent as Close } from '../icons/close.svg';
import { ReactComponent as Menu } from '../icons/menu.svg';

export const NavBar = ({ menuName }) => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menu = require('../data/navbar.json');
  const dataMenu = menu.menu;

  const dataFilt = dataMenu.filter((list) => list.type === menuName);
  const data = dataFilt[0].data;

  // NAVBAR Background Change:
  const changeNavbarBackground = () => {
    // console.log(Math.round(window.scrollY));
    if (Math.round(window.scrollY) >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbarBackground);

  // MENU BUTTON TOGGLE
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={navbar ? 'navbar__navbar navbar__active' : 'navbar__navbar'}
    >
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
