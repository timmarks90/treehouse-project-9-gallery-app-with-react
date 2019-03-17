import React, { Component } from 'react';
import '.././App.css';
import apiKey from '.././Config';
import Header from './Header';
import Gallery from './Gallery';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      searchQuery: ''
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
          loading: false,
          searchQuery: query
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
          <Switch>
            {/* Redirect to /sunset on home route */}
            <Route exact path="/" render={ () => <Redirect to="/sunset" /> } />
            <Route exact path='/:query' component={ history =>
              <React.Fragment>
                <Header 
                  onSearch={this.search} 
                  history={history}
                />
                {
                  (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery 
                      photos={this.state.images}
                      searchQuery={this.state.searchQuery}
                    />
                }
              </React.Fragment>
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
