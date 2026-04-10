import mongoose from "mongoose";
import crypto from "crypto";

const userSchema=new mongoose.Schema({
	fullname:{
		type:String,
		required:true,
		unique:false
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	salt:{
		type:String
	},
	password:{
		type:String,
		required:true,
		unique:false
	},
	profileImageURL:{
		type:String,
		default:"/images/default.png",
	},
	role:{
		type:String,
		enum:["USER","ADMIN"],
		default:"USER",
	}
});

userSchema.pre("save",function(next){
	const user=this
	if(!user.isModified("password")) return next();

	const salt=crypto.randomBytes(16).toString("hex");

	const hashedPassword=crypto.createHmac("sha256",salt)
	.update(this.password)
	.digest("hex");

	this.salt=salt;
	this.password=hashedPassword;

});


const user=new mongoose.model("userSchema",userSchema,"users");

export default user;
