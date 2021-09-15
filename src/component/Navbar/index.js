import React from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../assets/Udaan.svg';

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
      <Logo />
      <div className='nav-elements'>
        <a href='/#about'>About</a>
        <a href='/#related-projects'>Related projects</a>
        <a href='/#publications'>Publications</a>
        <a href='/#contact'>Contact</a>
      </div>
      <div className='sign-in-wrapper'>
        <a href='/'>SignUp/SignIn</a>
        <select>
          <option>ENG</option>
        </select>
      </div>
      <button
        onClick={() => {
          window.location.href = '/#donation';
        }}>
        Donate
      </button>
    </nav>
  );
};

export default Navbar;
