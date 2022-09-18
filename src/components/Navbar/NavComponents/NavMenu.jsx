import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu, GoX} from 'react-icons/gi';

const NavMenu = () => {
  return (
    <div className='NavMenu'>
      <ul>
        <li>
          <NavLink to='kits'>
            Kits
          </NavLink>
        </li>
        <li>
          <NavLink to='resources'>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to='about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
