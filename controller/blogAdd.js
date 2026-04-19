function get(user,blog){
    return async (req,res)=>{
        if(req.user){
            const user=req.user;
            res.render("blogAdd",{
                user,
            });
        }
        else{
            res.render("blogAdd");
        }
    }

}
function post(user,blog){
    return async function(req,res){
        console.log(req.body);
        if(req.user){
            const user=req.user;
            res.render("blogAdd",{
                user,
            });
        }
        else{
            res.render("blogAdd");
        }
    }
}

export default{
    get,
    post,
}