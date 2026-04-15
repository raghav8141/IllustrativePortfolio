// 1. Cloudinary Cloud Name
const CLOUD_NAME = "dcmx6o1km";
export const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// 2. list the filenames exactly as they appear in Cloudinary or if in folder write path
const photoSpecs = {
    "IMG_7520.JPG": { width: 1080, height: 1000 },
    "IMG_7433.JPG": { width: 900, height: 1000 },
    "IMG_7519.jpg": { width: 900, height: 1000 },
    "IMG_6650.jpeg": { width: 900, height: 1000 },
    "IMG_6641.jpeg": { width: 1070, height: 800 },
    "IMG_5213.JPG": { width: 1070, height: 800 },
    "IMG_5223.JPG": { width: 900, height: 1000 },
    "IMG_5214.JPG": { width: 1070, height: 800 },
    "IMG_5221.jpg": { width: 900, height: 1000 },
    "IMG_5227.JPG": { width: 700, height: 800 },
    "IMG_3236.jpg": { width: 1070, height: 800 },
    "IMG_3320.jpg": { width: 900, height: 800 },
    "DSC_1093.JPG": { width: 1070, height: 800 },
    "IMG_5099.JPG": { width: 700, height: 1000 },
    "DSC_1033.JPG": { width: 1080, height: 1620 }, // Tall
    "DSC_1045.JPG": { width: 1080, height: 810 },
    "IMG_2460.JPG": { width: 2000, height: 1620 }, // Extra Wide
    "DSC_0934.JPG": { width: 1100, height: 700 },
    "DSC_1088.JPG": { width: 600, height: 810 },
    "IMG_7430.JPG": { width: 900, height: 600 },
    "IMG_E0446.JPG": { width: 500, height: 720 },
    "DSC_0879.JPG": { width: 1080, height: 600 },
    "DSC_1087.JPG": { width: 100, height: 160 },
    "IMG_2276.JPG": { width: 700, height: 694 },
    "DSC_0889.JPG": { width: 700, height: 1000 },
    "IMG_0473.JPG": { width: 1080, height: 810 },
    "IMG_E0412.JPG": { width: 700, height: 1000 },
    "IMG_0318.JPG": { width: 1080, height: 1440 },
    "DSC_0717.JPG": { width: 1080, height: 720 },
    "IMG_E0421.JPG": { width: 1080, height: 1440 },
    "DSC_1070.JPG": { width: 1080, height: 900 },
    "DSC_0901.JPG": { width: 1080, height: 650 },
    "CSC_0904.JPG": { width: 1080, height: 800 },
    "DSC_0898.JPG": { width: 1080, height: 720 },
    "DSC_0907.JPG": { width: 500, height: 610 },
    "DSC_0899.JPG": { width: 1080, height: 700 },
    "DSC_0799.JPG": { width: 1080, height: 721 },
    "DSC_0927.JPG": { width: 1080, height: 600 },
    "DSC_0932.JPG": { width: 1080, height: 720 },
    "DSC_0890.JPG": { width: 800, height: 1000 }
};

const fileNames = Object.keys(photoSpecs);

//If it is image watermark
// const watermark = "l_watermark_logo,o_30,w_200,g_south_east,x_10,y_10"; 

//For text watermark
const watermark = "l_text:Arial_14_bold:RP,co_white,o_15,g_south_east,x_10,y_10";

// 3. This function formats the data for BOTH your Gallery and Slider
export const allPhotos = fileNames.map((name, index) => {
    const id = fileNames.length - index;
	 const specs = photoSpecs[name];
    return {
        id: id,
        // The 'original' for your Slider
        original: `${BASE_URL}/q_auto,f_auto/${name}`,
        // The 'src' for your PhotoAlbum (Width/Height from your original code)
        src: `${BASE_URL}/q_auto,f_auto,w_1000/${name}`,

		// //   Apply watermark to the high-res original
      //   original: `${BASE_URL}/${watermark},q_auto,f_auto/${name}`,
        
      //   // Apply watermark to the gallery view
      //   src: `${BASE_URL}/${watermark},q_auto,f_auto,w_1000/${name}`,

        // The 'thumbnail' for the Slider bottom bar
        thumbnail: `${BASE_URL}/c_fill,g_auto,w_100,h_70/${name}`,
        width: specs.width, // You can keep these generic or map them specifically
        height: specs.height,
        loading: "lazy"
    };
});