// 1. Cloudinary Cloud Name
const CLOUD_NAME = "dcmx6o1km";
export const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// 2. list the filenames exactly as they appear in Cloudinary or if in folder write path
const fileNames = [
    "IMG_7520.JPG", "IMG_7433.JPG", "IMG_7519.jpg", "IMG_6650.jpeg",
    "IMG_6641.jpeg", "IMG_5213.JPG", "IMG_5223.JPG", "IMG_5214.JPG",
    "IMG_5221.jpg", "IMG_5227.JPG" , "IMG_3236.jpg" , "IMG_3320.jpg",
	 "DSC_1093.JPG", "IMG_5099.JPG", "DSC_1033.JPG","DSC_1045.JPG",
	 "IMG_2460.JPG","DSC_0934.JPG","DSC_1088.JPG","IMG_7430.JPG",
	 "IMG_E0446.JPG","DSC_0879.JPG","DSC_1087.JPG","IMG_2276.JPG",
	 "DSC_0889.JPG","IMG_0473.JPG","IMG_E0412.JPG","IMG_0318.JPG",
	 "DSC_0717.JPG","IMG_E0421.JPG","DSC_1070.JPG","DSC_0901.JPG",
	 "CSC_0904.JPG","DSC_0898.JPG","DSC_0907.JPG","DSC_0899.JPG",
	 "DSC_0799.JPG","DSC_0927.JPG","DSC_0932.JPG","DSC_0890.JPG"
];

// 3. This function formats the data for BOTH your Gallery and Slider
export const allPhotos = fileNames.map((name, index) => {
    const id = fileNames.length - index;
    return {
        id: id,
        // The 'original' for your Slider
        original: `${BASE_URL}/q_auto,f_auto/${name}`,
        // The 'src' for your PhotoAlbum (Width/Height from your original code)
        src: `${BASE_URL}/q_auto,f_auto,w_1000/${name}`,
        // The 'thumbnail' for the Slider bottom bar
        thumbnail: `${BASE_URL}/c_fill,g_auto,w_100,h_70/${name}`,
        width: 1080, // You can keep these generic or map them specifically
        height: 1000,
        loading: "lazy"
    };
});