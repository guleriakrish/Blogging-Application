import express from "express";
import http from "http";
import path from "path";
import userRouter from "./routes/user.js";
import connection from "./connection/index.js";

const app=express();
const port=2233;

await connection("mongodb://127.0.0.1:27017/BloggIt");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",(req,res)=>{
	res.render("home");
});

app.use("/user",userRouter);
app.listen(port,console.log(`[SERVER STARTED AT PORT ${port}]`));
