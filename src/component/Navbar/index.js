/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */

import React, { useContext } from 'react';
import './style.scss';
import Logo from '../../assets/logo.svg';
import { AuthContext } from '../../store';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();
  return (
    <nav className='navbar-wrapper'>
      <img
        src={Logo}
        style={{
          background: 'white',
          borderRadius: '50%',
          padding: '5px',
          width: '70px',
          height: '70px',
          objectFit: 'contain',
        }}
        alt='Udaan logo'
      />
      <div className='nav-elements'>
        <a href='/#about'>About</a>
        <a href='/#related-projects'>Related projects</a>
        <a href='/#publications'>Publications</a>
        <a href='/#contact'>Contact</a>
      </div>
      <div className='sign-in-wrapper'>
        {!currentUser ? (
          <a href='/login'>SignUp/SignIn</a>
        ) : (
          <a
            href='javascript:void(0)'
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}>
            Logout
          </a>
        )}
        <select>
          <option>ENG</option>
        </select>
      </div>
      {/* <button
        onClick={() => {
          window.location.href = '/#donation';
        }}>
        Donate
      </button> */}
    </nav>
  );
};

export default Navbar;
