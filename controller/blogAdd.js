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
        console.log(req.file);
        const bg=await blog.create({
            title:req.body.titleOfBlog,
            body:req.body.contentOfBlog,
            coverImageUrl:`./public/uploads/${req.file.filename}`,
            createdBy:req.user._id
        });
        return res.redirect(`/blog/${bg._id}`);
    }
}

export default{
    get,
    post,
}