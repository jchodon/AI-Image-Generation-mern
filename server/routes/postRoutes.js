import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";
dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//CREATE A POST

router.route("/").post(async (req, res) => {
  try {
    //get the info from the frontend; destructure it
    const { name, prompt, photo } = req.body;
    //upload the photo url to cloudinary to be store before creating the instance of the new document(newpost)
    const photoUrl = await cloudinary.uploader.upload(photo);
    //based on the info from cloudinary photourl we create a new post into the datashare by only sharing the url
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
