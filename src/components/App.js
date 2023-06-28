import ImageGallery from 'react-image-gallery';
import { images } from '../data/images';
import Home from '../pages/Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from '../pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

		<Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
				<Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<ImageGallery items={images} />} />
          </Routes>
      </Router>
      {/* <ImageGallery items={images} /> */}
    </div>
  );
}

export default App;
