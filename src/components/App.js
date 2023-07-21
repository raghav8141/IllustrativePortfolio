import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { images } from '../data/images';
import Home from '../pages/Home/Home';
import Navbar from './Navbar/Navbar';
import Contact from '../pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Rowlayout from '../pages/Layout/Rowlayout';

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
	return (
		<ImageGallery items={images} startIndex={startIndex} />
	)
}