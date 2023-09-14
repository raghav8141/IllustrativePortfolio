import ImageGallery from 'react-image-gallery';
import React from 'react';
import { images } from '../data/images';
import Home from '../pages/Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from '../pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Rowlayout from '../pages/Layout/Rowlayout';
import GlobalStyles from '../styles/GlobalStyle';

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

function MyGallery(props) {
	const params = useParams();
	const imageId = Number(params.id);

	let startIndex = 0;
	if(imageId) {
		const index = images.findIndex((obj)=> {
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
        if (isFullscreen) {
          // Add the full-screen class when entering full-screen mode
          slide.classList.add('full-screen');
          // Remove any height restriction when in fullscreen mode on iPad screens
          slide.style.maxHeight = 'none';
        } else {
          // Remove the full-screen class when exiting full-screen mode
          slide.classList.remove('full-screen');
          // Reset the max height based on screen size when not in fullscreen mode
          const image = slide.querySelector('img');
          if (window.innerWidth <= 768) {
            // Small screens (<= 768px)
            image.style.maxHeight = '210px';
          } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            // iPad screens (768px < screen width <= 1024px)
            image.style.maxHeight = 'calc(100vh - 250px)';
          } else {
            // Large screens
            image.style.maxHeight = 'calc(100vh - 220px)';
          }
        }
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
			<ImageGallery items={images} 
				startIndex={startIndex} 
				showThumbnails={showThumbnails}
				renderFullscreenButton={renderFullscreenButton}
			/>
	);
}