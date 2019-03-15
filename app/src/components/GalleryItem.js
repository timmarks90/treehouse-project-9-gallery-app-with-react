import React from 'react';


// Individual image items from Flickr API returned
const GalleryItem = props => (
  <div>
    <li>
      <img src={props.url} alt="" />
    </li>
  </div>
)

export default GalleryItem;