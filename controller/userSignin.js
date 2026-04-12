import express from "express";


function get(user){
	return async function(req,res){
		res.render("signin");
	}
}
function post(user){
	return async function(req,res){
		console.log(req.body);
		const code=await user.matchPassword(req.body.email,req.body.password);
		console.log(code);
		res.render("signin",{
			serverCode:code
		});
	}
}

export default{
	get,
	post
}
