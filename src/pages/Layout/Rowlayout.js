import PhotoAlbum from "react-photo-album";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from 'react';
import { images } from '../../data/images';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  position: fixed;
  top: 8%;
  left: 7px;
  right: 7px;
  bottom: 0;
  overflow: auto; 
  margin-top: 15px;
`;

const photos = [
	 { id: 40, src: require('../../images/IMG_7520.JPG'), width: 1080, height: 1000, loading: "lazy" },
	 { id: 39, src: require('../../images/IMG_7433.JPG'), width: 900, height: 1000, loading: "lazy" },
	 { id: 38, src: require('../../images/IMG_7519.jpg'), width: 900, height: 1000, loading: "lazy" },
	 { id: 37, src: require('../../images/IMG_6650.jpeg'), width: 900, height: 1000, loading: "lazy" },
	 { id: 36, src: require('../../images/IMG_6641.jpeg'), width: 1070, height: 800, loading: "lazy" },
	 { id: 35, src: require('../../images/IMG_5213.JPG'), width: 1070, height: 800, loading: "lazy" },
	 { id: 34, src: require('../../images/IMG_5223.JPG'), width: 900, height: 1000, loading: "lazy" },
	 { id: 33, src: require('../../images/IMG_5214.JPG'), width: 1070, height: 800, loading: "lazy" },
	 { id: 32, src: require('../../images/IMG_5221.jpg'), width: 900, height: 1000, loading: "lazy" },
	 { id: 31, src: require('../../images/IMG_5227.JPG'), width: 700, height: 800, loading: "lazy" },
	 { id: 30, src: require('../../images/IMG_3236.jpg'), width: 1070, height: 800, loading: "lazy" },
	 { id: 29, src: require('../../images/IMG_3320.jpg'), width: 900, height: 800, loading: "lazy" },
	 { id: 28, src: require('../../images/DSC_1093.JPG'), width: 1070, height: 800, loading: "lazy" },
	 { id: 27, src: require('../../images/IMG_5099.JPG'), width: 700, height: 1000, loading: "lazy" },
	 { id: 26, src: require('../../images/DSC_1033.JPG'), width: 1080, height: 1620, loading: "lazy" },
	 { id: 25, src: require('../../images/DSC_1045.JPG'), width: 1080, height: 810, loading: "lazy" },
	 { id: 24, src: require('../../images/IMG_2460.JPG'), width: 2000, height: 1620, loading: "lazy" },
	 { id: 23, src: require('../../images/DSC_0934.JPG'), width: 1100, height: 700, loading: "lazy" },
    { id: 22, src: require('../../images/DSC_1088.JPG'), width: 600, height: 810, loading: "lazy" },
    { id: 21, src: require('../../images/IMG_7430.JPG'), width: 900, height: 600 ,loading: "lazy"},
	 { id: 20, src: require('../../images/IMG_E0446.JPG'), width: 500, height: 720, loading: "lazy" },
	 { id: 19, src: require('../../images/DSC_0879.JPG'), width: 1080, height: 600, loading: "lazy" },
	 { id: 18, src: require('../../images/DSC_1087.JPG'), width: 100, height: 160, loading: "lazy" },
	 { id: 17, src: require('../../images/IMG_2276.JPG'), width: 700, height: 694, loading: "lazy" },
	 { id: 16, src: require('../../images/DSC_0889.JPG'), width: 700, height: 1000, loading: "lazy" },
	 { id: 15, src: require('../../images/IMG_0473.JPG'), width: 1080, height: 810, loading: "lazy" },
	 { id: 14, src: require('../../images/IMG_E0412.JPG'), width: 700, height: 1000, loading: "lazy" },
	 { id: 13, src: require('../../images/IMG_0318.JPG'), width: 1080, height: 1440, loading: "lazy" },
	 { id: 12, src: require('../../images/DSC_0717.JPG'), width: 1080, height: 720, loading: "lazy"},
	 { id: 11, src: require('../../images/IMG_E0421.JPG'), width: 1080, height: 1440,loading: "lazy" },
	 { id: 10, src: require('../../images/DSC_1070.JPG'), width: 1080, height: 900, loading: "lazy" },
	 { id: 9, src: require('../../images/DSC_0901.JPG'), width: 1080, height: 650, loading: "lazy"},
	 { id: 8, src: require('../../images/CSC_0904.JPG'), width: 1080, height: 800, loading: "lazy" },
	 { id: 7, src: require('../../images/DSC_0898.JPG'), width: 1080, height: 720, loading: "lazy" },
	 { id: 6, src: require('../../images/DSC_0907.JPG'), width: 500, height: 610, loading: "lazy" },
	 { id: 5, src: require('../../images/DSC_0899.JPG'), width: 1080, height: 700, loading: "lazy" },
	 { id: 4, src: require('../../images/DSC_0799.JPG'), width: 1080, height: 721, loading: "lazy" },
	 { id: 3, src: require('../../images/DSC_0927.JPG'), width: 1080, height: 600, loading: "lazy" },
	 { id: 2, src: require('../../images/DSC_0932.JPG'), width: 1080, height: 720, loading: "lazy" },
    { id: 1, src: require('../../images/DSC_0890.JPG'), width: 800, height: 1000, loading: "lazy" }

];
export default function Gallery() {
  const navigate = useNavigate();
  const [clickedImageId, setClickedImageId] = useState(null);
  const containerRef = useRef(null);

  const handlePhotoClick = (obj) => {
	const photo = obj.photo;
    setClickedImageId(photo.id);
	 navigate(`/gallery/image/${photo.id}`);
  };

  const renderClickedImage = () => {
    if (clickedImageId) {
		const image = images.find((img) => img.id === clickedImageId);
		if(image) {
			return (
				<img
					src={image.original}
					alt={`Image ${image.id}`}
					key={image.id}
					onClick={() => setClickedImageId(null)}
				/>
      );
		}
    }
    return null;
  };

 return (
    <GalleryContainer>
      <PhotoAlbum layout="rows" photos={photos} onClick={handlePhotoClick} />
      {renderClickedImage()}
    </GalleryContainer>
  );
}
