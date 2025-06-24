import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function FancyGallery({ images }) {
  // images should be an array of { original, thumbnail }
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showPlayButton={true}
        showFullscreenButton={true}
        autoPlay={true}
        slideInterval={3000}
        showNav={true}
      />
    </div>
  );
}

export default FancyGallery;