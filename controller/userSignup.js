
async function get(req,res){
	
	res.render("signup");
}
function post(userModel){
	return async (req,res)=>{
		console.log(req.body);
	//	res.redirect("/");
		userModel.create({
			fullname:req.body.fullname,
			email:req.body.email,
			password:req.body.password,
		});
		res.render("signup",{
			successMessage:"Signup up successfull"

		
		});
	}
}

export default{
	get,
	post
}
