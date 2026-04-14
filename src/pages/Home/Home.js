import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeContainer, BackgroundImg, Name } from './Home.styled';
import { allPhotos } from '../../data/photos';
import { BASE_URL } from '../../data/photos';

// let HomeImage = require("../../images/DSC_0927.JPG");

const HomeImage = `${BASE_URL}/q_auto,f_auto/DSC_0927`;

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