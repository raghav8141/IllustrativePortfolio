import ImageGallery from 'react-image-gallery';
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
            <Route path="/" element={<Home/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/layout" element={<Rowlayout/>}/>
          	{/* <Route path="/gallery/:id" element={<MyGallery/>} /> */}
				<Route path="/gallery" >
					<Route path="image" element={<MyGallery/>}></Route>
					<Route path="image/:id" element={<MyGallery/>}></Route>
				</Route>
          </Routes>
      </Router>
      {/* <ImageGallery items={images} /> */}
    </div>
  );
}

export default App;

function MyGallery(props) {
	const params = useParams();
	const imageId = Number(params.id);
	let startIndex = 0;
	console.log("Selected image id: " ,imageId);
	if(imageId) {
		const index = images.findIndex((obj)=> {
				return obj.id == imageId;
			}
		)
		console.log("arr: ",index);
		startIndex = index; 
	}
	return (
		<ImageGallery items={images} startIndex={startIndex} />
	)
}