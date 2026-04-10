import mongoose from "mongoose";

export default async function c(url){
	await mongoose.connect(url);
	console.log("[MONGOOSE CONNECTED]");
}
