import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeContainer, BackgroundImg, Name } from './Home.styled';

let HomeImage = require("../../images/DSC_0927.JPG");

function Home(){
	const location = useLocation();
    return (
        <>
        <HomeContainer>
            <BackgroundImg src={HomeImage} alt="architect"
				overlay={location.pathname === '/'}/>
        </HomeContainer>
        </>
    );
};

export default Home;