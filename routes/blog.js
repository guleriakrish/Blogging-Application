import express from "express";
import blogAdd from "../controller/blogAdd.js";
import user from "../model/userModel.js"
import blog from "../model/blog.js";

const router=express.Router();

router.get("/add",blogAdd.get(user,blog));
router.post("/add",blogAdd.post(user,blog));
export default router;  