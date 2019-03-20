import React from 'react'
import { SearchForm } from './SearchForm';
import Nav from './Nav';

const Header = ({onSearch, history}) => {
  return (
    <React.Fragment>
      <SearchForm onSearch={onSearch} history={history} />

      <Nav onSearch={onSearch} />
    </React.Fragment>
  );
};

export default Header;