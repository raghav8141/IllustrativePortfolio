import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import Contact from '../Contact/Contact'


import { HomeContainer, BackgroundImg, Name } from './Home.styled';
let HomeImage = require("../../images/home-page-background.png");

function Home(){
    return (
        <>
        <HomeContainer>
            <BackgroundImg src={HomeImage} alt="architect"/>
				{/* <Contact path="/contact" element={<Contact/>}/>  */}
            {/* <Name>Sample Text</Name> */}
        </HomeContainer>
        </>

    );

};

export default Home;