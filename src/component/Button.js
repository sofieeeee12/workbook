import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

export function Button() {
  return (
    <NavLink to='/form'>
    <button className='btn'>Sign Up</button>
    </NavLink>
  );
}