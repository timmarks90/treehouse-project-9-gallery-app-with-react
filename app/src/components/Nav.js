import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Nav = props => (
  <div>
    <nav className="main-nav">
      <ul>
        <li><Link to='/cats'>Cats</Link></li>
        <li><Link to='/dogs'>Dogs</Link></li>
        <li><Link to='/computers'>Computers</Link></li>
      </ul>
    </nav>
    <Route path="/cats"/>
  </div>
)

export default Nav;