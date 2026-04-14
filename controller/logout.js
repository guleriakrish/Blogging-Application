function get(req,res){
	res.clearCookie("token").redirect("/");
}

export default{
	get
}
