// First Approach ("Preferred")
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({path: './env'})

connectDB()













// Second Approach
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      throw error;
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/