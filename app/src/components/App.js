import React, { Component } from 'react';
import '.././App.css';
import apiKey from '.././Config';
import Header from './Header';
import Gallery from './Gallery';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    this.search();
  }

  search = (query = 'sunset') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(res => {
        this.setState({ 
          images: res.photos.photo,
          loading: false
        });
      })
      .catch( err => {
        console.log('There was an error fetching the data', err);
      })
  }

  render() {
    console.log(this.state.images);
    return (
      <BrowserRouter>
        <div className="container">          
          {/* Redirect to /sunset on home route */}
          <Route exact path="/" render={ () => <Redirect to="/sunset" /> } />
          <Header onSearch={this.search} />
          {
            (this.state.loading) ? <p>Loading...</p> : <Gallery data={this.state.images} />
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
