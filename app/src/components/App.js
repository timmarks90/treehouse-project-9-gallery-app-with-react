import React, { Component } from 'react';
import logo from '.././logo.svg';
import '.././App.css';
import apiKey from '.././Config';
import Header from './Header';
import Gallery from './Gallery';
import GalleryItem from './GalleryItem';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(res => {
        this.setState({ images: res.photos });
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
          <Header />

          <Gallery data={this.state.images} />
          <Route path="" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
