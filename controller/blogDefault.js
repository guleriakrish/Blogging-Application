function get(user,blog){
    return async (req,res)=>{
        // res.end("[TESING]");
        const blogData=await blog.findById(req.params.id);
        res.render("blog",{
            user: req.user,
            blogData
        });
    }
}

export default{
    get,
}