import React, {useState, useEffect, useContext} from 'react';
import NavBrand from './NavComponents/NavBrand.jsx';
import NavMenu from './NavComponents/NavMenu.jsx';
import './Navbar.css';

// AiOutlineFolder


const Navbar = ({projects}) => {
  return (
    <div className='Navbar'>
      <NavBrand brandName='Project Maker'/>
    </div>
  );
};

export default  Navbar;
