const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env; 

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'SuperMarket'
    });
}

module.exports = uploadImage;