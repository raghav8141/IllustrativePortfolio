import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import Contact from '../Contact/Contact'
import { useLocation } from 'react-router-dom';


import { HomeContainer, BackgroundImg, Name } from './Home.styled';
import Navbar from '../../components/Navbar/Navbar';

let HomeImage = require("../../images/DSC_0927.JPG");

function Home(){
	const location = useLocation();
// 	const routes = useRoutes();

// 	const match = routes.find(route => route.path === '/gallery/image');
//   const match1 = routes.find(route => route.path === '/layout');

    return (
        <>
        <HomeContainer>
            <BackgroundImg src={HomeImage} alt="architect"
				overlay={location.pathname === '/'}/>
        </HomeContainer>
		   {/* <Navbar/> */}
        </>

    );

// 	return (
//     <>
//       {location.pathname === '/' && !match && !match1 &&(
//         <>
//           <HomeContainer>
//             <BackgroundImg src={HomeImage} alt="architect" />
//           </HomeContainer>
//           {/* Rest of your component code */}
//         </>
//       )}
//     </>
//   );

};

export default Home;