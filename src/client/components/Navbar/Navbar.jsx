<<<<<<< HEAD
import React, {useState, useEffect, useContext} from 'react';
import NavBrand from './NavComponents/NavBrand.jsx';
import NavMenu from './NavComponents/NavMenu.jsx';
import './Navbar.css';

// AiOutlineFolder


const Navbar = ({projects}) => {
  return (
    <div className='Navbar'>
      <NavBrand brandName='Project Maker'/>
=======
import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      PROJECT MAKER
>>>>>>> fc88118da33f4cf5934384bc226b2513d13ca970
    </div>
  );
};

export default Navbar;
