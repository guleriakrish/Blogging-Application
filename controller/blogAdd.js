function get(user,blog){
    return async (req,res)=>{
        if(req.user){
            const user=req.user;
            res.render("blogAdd",{
                user,
            });
        }
        res.render("blogAdd");
    }

}

export default{
    get,
}