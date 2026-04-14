import ImageGallery from 'react-image-gallery';
import React from 'react';
import { allPhotos } from '../data/photos';
import Home from '../pages/Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from '../pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Rowlayout from '../pages/Layout/Rowlayout';
import GlobalStyles from '../styles/GlobalStyle';
import styled from 'styled-components';


function App() {
  return (
    <div className="app">

		<Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} exact />
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/layout" element={<Rowlayout/>}/>
				<Route path="/gallery" >
					<Route path="image" element={<MyGallery/>}></Route>
					<Route path="image/:id" element={<MyGallery/>}></Route>
				</Route>
          </Routes>
      </Router>
		 <GlobalStyles />
    </div>
  );
}

export default App;

const SliderWrapper = styled.div`
  position: fixed;
  top: 80px;      
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;

  .image-gallery {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .image-gallery-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center; 
    gap: 30px; 
  }

  .image-gallery-slide-wrapper {
    flex: 1; 
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image-gallery-thumbnails-wrapper {
    margin-top: 0; 
	 padding-top:0;
    padding-bottom: 10px; /* Adds space at the very bottom of the screen */

    height: 145px;      /* Matches your 110px image + some padding/border */
    flex-shrink: 0;     /* Prevents flexbox from squishing the belt */
    overflow: hidden;   /* Keeps internal layout shifts contained */
  }

	/* --- NEW: ENABLE NATIVE SWIPE/SCROLL --- */
  .image-gallery-thumbnails {
    overflow-x: auto !important;
    overflow-y: hidden !important;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch; /* Native feel for Mac trackpads */
    
    /* Sleek Scrollbar Styling */
    &::-webkit-scrollbar {
      height: 4px; /* Very thin line */
    }
    &::-webkit-scrollbar-thumb {
      background: #e0e0e0; /* Subtle light grey */
      border-radius: 10px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: #ccc; /* Darkens slightly on hover */
    }
  }

  .image-gallery-thumbnails-container {
    display: inline-block !important; /* Required for horizontal scroll */
    white-space: nowrap !important;
  }

  &&& .image-gallery-thumbnail {
    width: auto !important; /* Allow the container to be flexible */
	 background: transparent !important;
	 border: 3px solid transparent !important;
	 margin: 4px !important;
    padding: 0 !important;
    transition: all 0.2s ease;
	 display: inline-block;
    img {
      width: 150px !important;  /* Increased width */
      height: 110px !important;  /* Increased height */
      object-fit: cover !important;
    }
 
    &.active {
      border: 5px solid #337ab7 !important;
    }

	 &:hover {
      cursor: pointer;
      /* Option: Instead of a border, use opacity to show focus */
      opacity: 0.8; 
      
      /* If you hate the blue hover box, leave the border transparent here */
      // border: 3px solid transparent !important; 
    }
  }

  &&& .image-gallery-thumbnail-image {
    border: none !important;
    outline: none !important;
  }

  /* Ensure the main image shrinks so the bigger thumbnails fit on screen */
  .image-gallery-slide img {
    max-height: calc(100vh - 320px) !important; 
  }
`;

function MyGallery(props) {
	const params = useParams();
	const imageId = Number(params.id);

	let startIndex = 0;
	if(imageId) {
		const index = allPhotos.findIndex((obj)=> {
				return obj.id == imageId;
			}
		)
		startIndex = index; 
	}

	 const [showThumbnails, setShowThumbnails] = React.useState(true);
	  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  const renderFullscreenButton = (onClick, isFullscreen) => (
   <button
      type="button"
      className={`image-gallery-icon image-gallery-fullscreen-button ${isFullscreen ? 'fullscreen' : ''}`}
      onClick={() => {
        toggleThumbnails();
        onClick();
		  
      // Toggle a class on the slide element when entering/exiting full-screen mode
      const slide = document.querySelector('.image-gallery-slide');
      if (slide) {
        if (!isFullscreen) {
          // Add the full-screen class when entering full-screen mode
          slide.classList.add('full-screen');
          // Remove any height restriction when in fullscreen mode on iPad screens
          slide.style.maxHeight = 'none';
        } 
		//   else {
      //     // Remove the full-screen class when exiting full-screen mode
      //     slide.classList.remove('full-screen');
      //     // Reset the max height based on screen size when not in fullscreen mode
      //     const image = slide.querySelector('img');
      //     if (window.innerWidth <= 768) {
      //       // Small screens (<= 768px)
      //       image.style.maxHeight = '210px';
      //     } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      //       // iPad screens (768px < screen width <= 1024px)
      //       image.style.maxHeight = 'calc(100vh - 250px)';
      //     } else {
      //       // Large screens
      //       image.style.maxHeight = 'calc(100vh - 220px)';
      //     }
      //   }
      }
      }}

		
    >
      <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeWidth="2" strokeLinecap='round' strokeLinejoin='round'>
      {isFullscreen ? (
        <path d='M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3'></path>
      ) : (
        <path d='M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3'></path>
      )}
    </svg>
    </button>
  );

	return (
    <SliderWrapper>
      <ImageGallery 
        items={allPhotos} 
        startIndex={startIndex} 
        showThumbnails={showThumbnails}
        renderFullscreenButton={renderFullscreenButton}
      />
     </SliderWrapper>
  );
}