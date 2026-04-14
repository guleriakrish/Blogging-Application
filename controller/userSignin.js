import express from "express";


function get(user){
	return async function(req,res){
		res.render("signin");
	}
}
function post(user){
	return async function(req,res){
		console.log(req.body);
		const obj=await user.matchPassword(req.body.email,req.body.password);
		console.log(obj.code);
		console.log(obj.token);
		if(obj.code==2){
			res.cookie("token",obj.token).redirect("/");
		}
		else{
			res.render("signin",{
				serverCode:obj.code
			});
		}
	}
}

export default{
	get,
	post
}
