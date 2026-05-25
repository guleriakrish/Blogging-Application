
function post(user,blog,Comment){
    return async (req,res)=>{
        await Comment.create({
            content:req.body.commentContent,
            blogId:req.params.blogId,
            createdBy:req.user._id,
        });
        // console.log(req.body);
        // console.log(req.params.blogId);
        // console.log(req.user);
        return res.redirect(`/blog/d/${req.params.blogId}`);
    }
}

export default{
    post,
}