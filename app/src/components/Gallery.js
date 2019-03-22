import React from 'react';
import GalleryItem from './GalleryItem';
import NoMatch from './NoMatch';

const Gallery = props => {
  
  const results = props.photos;
  let images;
  
  if (results.length > 0) {
    images = results.map(image => 
      <GalleryItem key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
    )
  } else {
    images = <NoMatch searchQuery={ props.searchQuery } />
  }
  
  return (
    <div className="photo-container">
        <h2>{props.searchQuery} Images</h2>
        <ul>
          {images}
        </ul>
    </div>
  )
}

export default Gallery;