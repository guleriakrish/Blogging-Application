import express from "express";
import http from "http";
import path from "path";
import userRouter from "./routes/user.js";
import connection from "./connection/index.js";
import cookieParser from "cookie-parser";
import tokenValidation from "./middleware/tokenValidation.js";

const app=express();
const port=2233;


await connection("mongodb://127.0.0.1:27017/BloggIt");
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(tokenValidation("token"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",(req,res)=>{
//	console.log(req.cookies.token);
	res.render("home");
});

app.use("/user",userRouter);
app.listen(port,console.log(`[SERVER STARTED AT PORT ${port}]`));
