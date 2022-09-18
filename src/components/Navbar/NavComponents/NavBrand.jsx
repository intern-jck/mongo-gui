import React from 'react';
import {Link} from 'react-router-dom';

const NavBrand = ({brandName, brandLink}) => {
  return (
    <div className='NavBrand'>
      <Link to={`/${brandLink}`}>
        {brandName}
      </Link>
    </div>
  );
};

export default  NavBrand;
