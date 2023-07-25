import PhotoAlbum from "react-photo-album";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { images } from '../../data/images';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
`;

const photos = [
    { id: 1, src: require('../../images/DSC_0927.JPG'), width: 1080, height: 1620 },
    { id: 2, src: require('../../images/DSC_0932.JPG'), width: 1080, height: 720 },
	 { id: 3, src: require('../../images/DSC_0799.JPG'), width: 1080, height: 721 },
	 { id: 4, src: require('../../images/DSC_0899.JPG'), width: 1080, height: 1620 },
	 { id: 5, src: require('../../images/DSC_0907.JPG'), width: 500, height: 610 },
	 { id: 6, src: require('../../images/DSC_0890.JPG'), width: 800, height: 1000 },
	 { id: 7, src: require('../../images/DSC_0898.JPG'), width: 1080, height: 720 },
	 { id: 8, src: require('../../images/CSC_0904.JPG'), width: 1080, height: 1549 },
	 { id: 9, src: require('../../images/DSC_0901.JPG'), width: 1080, height: 720 },
	 { id: 10, src: require('../../images/DSC_1070.JPG'), width: 1080, height: 610 },
	 { id: 11, src: require('../../images/IMG_E0421.JPG'), width: 1080, height: 1440 },
	 { id: 12, src: require('../../images/DSC_0717.JPG'), width: 1080, height: 720 },
	 { id: 13, src: require('../../images/IMG_0318.JPG'), width: 1080, height: 1440 },
	 { id: 14, src: require('../../images/IMG_E0412.JPG'), width: 700, height: 1000 },
    { id: 15, src: require('../../images/IMG_0473.JPG'), width: 1080, height: 810 },
	 { id: 16, src: require('../../images/DSC_0889.JPG'), width: 700, height: 1000 },
	 { id: 17, src: require('../../images/IMG_2276.JPG'), width: 700, height: 694 },
	 { id: 18, src: require('../../images/DSC_1087.JPG'), width: 100, height: 160 },
	 { id: 19, src: require('../../images/DSC_0879.JPG'), width: 1080, height: 1620 },
	 { id: 20, src: require('../../images/IMG_E0446.JPG'), width: 500, height: 720 },
	 { id: 21, src: require('../../images/IMG_7430.JPG'), width: 1080, height: 720 },
	 { id: 22, src: require('../../images/DSC_1088.JPG'), width: 600, height: 810 },
	 { id: 23, src: require('../../images/DSC_0934.JPG'), width: 1080, height: 1440 },
	 { id: 24, src: require('../../images/IMG_2460.JPG'), width: 2000, height: 1620 },
	 { id: 25, src: require('../../images/DSC_1045.JPG'), width: 1080, height: 810 },
	 { id: 26, src: require('../../images/DSC_1033.JPG'), width: 1080, height: 1620 },
	 { id: 27, src: require('../../images/DSC_1093.JPG'), width: 1080, height: 720 },
];

export default function Gallery() {
  const navigate = useNavigate();
  const [clickedImageId, setClickedImageId] = useState(null);

  const handlePhotoClick = (obj) => {
	const photo = obj.photo;
	console.log(photo);
    setClickedImageId(photo.id);
	 navigate(`/gallery/image/${photo.id}`);
  };

  const renderClickedImage = () => {
	console.log(clickedImageId);
    if (clickedImageId) {
		const image = images.find((img) => img.id === clickedImageId);
		if(image) {
			console.log(image.original);
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
