import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    FileSystem.unlinkSync(localFilePath);
    console.log("Cloudinary uploader response: ", response);

    return response;
    
  } catch (error) {
    FileSystem.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
