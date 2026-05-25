function get(user,blog,Comment){
    return async (req,res)=>{
        // res.end("[TESING]");
        const blogData=await blog.findById(req.params.id);
        var blogComments=[];
        console.log(blogData._id);
        blogComments=await Comment.find({
        blogId:blogData._id,
        });

 
        res.render("blog",{
            user: req.user,
            blogData,
            blogComments,
        });
    }
}

export default{
    get,
}