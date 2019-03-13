import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

export class Gallery extends Component {
  render() {
    return (
      <div className="photo-container">
          <h2>Results</h2>
          <ul>
            <GalleryItem />
          </ul>
      </div>
    )
  }
}

export default Gallery;
