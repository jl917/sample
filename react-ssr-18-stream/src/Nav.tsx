import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li><Link to="/about">about</Link></li>
    <li><Link to="/main">main</Link></li>
    <li><Link to="/randomUser">randomuser</Link></li>
  </ul>
)

export default Nav;
