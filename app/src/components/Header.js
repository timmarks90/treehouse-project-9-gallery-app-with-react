import React, { Component } from 'react'
import { SearchForm } from './SearchForm';
import { Nav } from './Nav';

export class Header extends Component {
  render() {
    return (
      <div>
        <SearchForm />

        <Nav />
      </div>
    )
  }
}

export default Header;
