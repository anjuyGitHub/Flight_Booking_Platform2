import React from 'react';
import logo from '../Assets/logo.png';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
      <img className='img' src={logo} alt="logo" />
      <p className='websitename'>Garuna Airlines</p>
      <ul>
        <li> <Link to="/home1">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/features">Features</Link></li>

      </ul>
      
    </div>
  );
};

export default Nav;

