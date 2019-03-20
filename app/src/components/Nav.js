import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
  <div>
    <nav className="main-nav">
      <ul>
        <li><Link to='/cars' onClick={ () => {props.onSearch('cars')} }>Cars</Link></li>
        <li><Link to='/dogs' onClick={ () => {props.onSearch('dogs')} }>Dogs</Link></li>
        <li><Link to='/ocean' onClick={ () => {props.onSearch('ocean')} }>Ocean</Link></li>
        <li><Link to='/nature' onClick={ () => {props.onSearch('nature')} }>Nature</Link></li>
      </ul>
    </nav>
  </div>
)

export default Nav;