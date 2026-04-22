import express from "express";
import blogAdd from "../controller/blogAdd.js";
import user from "../model/userModel.js"
import blog from "../model/blog.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        const pathToFile=path.resolve(`./public/uploads/${req.user._id}`);
        
        if(!fs.existsSync(pathToFile)){
            fs.mkdirSync(pathToFile,{recursive:true});
        }

        cb(null,pathToFile);
    },
    filename:function(req,file,cb){
        const filename=`${Date.now()}-${file.originalname}`;
        req.filename=filename;
        cb(null,filename);
    }
})

const upload=multer({storage:storage});

const router=express.Router();

router.get("/add",blogAdd.get(user,blog));
router.post("/add",upload.single('coverOfBlog'),blogAdd.post(user,blog));
export default router;  