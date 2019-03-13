import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul>
            <li><Link to='#'>Cats</Link></li>
            <li><Link to='#'>Dogs</Link></li>
            <li><Link to='#'>Computers</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
