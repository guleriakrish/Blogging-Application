import express from "express";
import http from "http";
import path from "path";

const app=express();
const port=2233;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.listen(port,console.log(`[SERVER STARTED AT PORT ${port}]`));
