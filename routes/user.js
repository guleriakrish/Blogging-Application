import express from "express";
import signup from "../controller/userSignup.js";
import userModel from "../model/userModel.js"

const router=express.Router();


router.get('/signup',signup.get);
router.post("/signup",signup.post(userModel));

export default router;
