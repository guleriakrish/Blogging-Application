import 'dotenv/config';
import express from "express";
import http from "http";
import path from "path";
import userRouter from "./routes/user.js";
import connection from "./connection/index.js";
import cookieParser from "cookie-parser";
import tokenValidation from "./middleware/tokenValidation.js";
import blogRouter from "./routes/blog.js";
import blog from "./model/blog.js";

const app=express();
const port=process.env.PORT;


await connection(process.env.MONGODB_URL);
app.use('/uploads', express.static(path.resolve('./public/uploads')));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(tokenValidation("token"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",async function(req,res){
	// console.log(req.cookies.token);
	// console.log(req.user);
	const blogs=await blog.find({});
	if(req.user){
		const user=req.user
		res.render("home",{
			user,
			blogs	
		});
	}
	else{
		res.render("home");
	}
});

app.use("/user",userRouter);
app.use("/blog",blogRouter);

app.listen(port,console.log(`[SERVER STARTED AT PORT ${port}]`));
