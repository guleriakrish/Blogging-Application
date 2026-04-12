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

userSchema.static('matchPassword',async function(email,password){
	
	const entry=await this.findOne({email});
	if(entry==null){
		return 0;
	}
	console.log(entry);
	const salt=entry.salt;

	console.log(typeof(email));
	console.log(typeof(password));
	console.log(typeof(salt));
	const enteredPassword=crypto.createHmac("sha256",salt)
	.update(password).digest("hex");
	console.log(enteredPassword);
	console.log(entry.password);

	if(enteredPassword!=entry.password){
		return 1;
	}

	return 2;
});





const user=new mongoose.model("userSchema",userSchema,"users");

export default user;
