import mongoose from "mongoose";

export default async function c(url){
	await mongoose.connect(url).then(()=>{;
	console.log("[MONGOOSE CONNECTED]");}).catch(()=>{
		console.log("[MONGOOSE NOT CONNECTED]");
	});
}
