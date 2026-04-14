import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
	title:{
		type:String,
		required:true,
	},
	body:{
		type:String,
		required:false,
	},
	createdBy:{
		type:Schema.Types.ObjectId,
		ref:"userSchema",
	},
}, {timestamps:true}
);

const blog=new mongoose.model("blog",blogSchema,"blog");

export default blog;



