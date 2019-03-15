import React, { Component } from 'react'
import { SearchForm } from './SearchForm';
import Nav from './Nav';

export class Header extends Component {

  render() {
    return (
      <div>
        <SearchForm onSearch={this.props.onSearch} />

        <Nav />
      </div>
    )
  }
}

export default Header;