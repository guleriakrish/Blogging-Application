import express from "express";
import signup from "../controller/userSignup.js";
import userModel from "../model/userModel.js";
import signin from "../controller/userSignin.js";
const router=express.Router();


router.get('/signup',signup.get);
router.post("/signup",signup.post(userModel));

router.get("/signin",signin.get(userModel));
router.post("/signin",signin.post(userModel));

export default router;
