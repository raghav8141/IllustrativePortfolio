import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './custom-image-gallery.css'; // Imported custom CSS file
import {images} from './images';     
// import '../data/custom-image-gallery.css'; // Imported custom CSS file
// import {images} from '../data/images';

const CustomImageGallery = () => {
  const [showThumbnails, setShowThumbnails] = useState(true);

  const toggleThumbnails = () => {
    setShowThumbnails((prevShowThumbnails) => !prevShowThumbnails);
  };

  const handleFullScreen = (isFullscreen) => {
    setShowThumbnails(!isFullscreen); // Hide thumbnails when entering fullscreen, and show them when exiting
  };

  return (
    <div>
      <ImageGallery
        items={images}
        showThumbnails={showThumbnails}
        onFullScreen={handleFullScreen}
        renderFullscreenButton={(onClick) => (
          <button
            type="button"
            className="image-gallery-fullscreen-button"
            onClick={() => {
              onClick();
              toggleThumbnails(); // Toggle the thumbnails bar visibility
            }}
          >
            {/* Your fullscreen button icon/image */}
            <img src="fullscreen-icon.png" alt="Fullscreen" />
          </button>
        )}
      />
    </div>
  );
};

export default CustomImageGallery;
