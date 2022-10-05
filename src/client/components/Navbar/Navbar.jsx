import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {RiArrowDropDownLine} from 'react-icons/ri';

const Navbar = ({createHandler}) => {

  return (
    <nav className='Navbar'>
      {/* PROJECT MAKER */}

      {/* Create */}
      <button onClick={createHandler}>
        NEW
      </button>
      {/* Read/Update */}
      <button>
        EDIT
      </button>
      {/* Delete */}
      <button>
        DELETE
      </button>

      <button
        className='dash-show-btn'
        // onClick={toggleProjects}
      >
        SHOW
        <RiArrowDropDownLine
          size={60}
          // style={showProjects ?
          // {transform: 'rotate(0deg)'} : {transform: 'rotate(90deg)'}}
        />
      </button>
    </nav>
  );
};

export default Navbar;
