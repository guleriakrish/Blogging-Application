import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog",
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema",
    }
},{timestamps:true}
);

const Comment=new mongoose.model("Comment",commentSchema,"Comment");

export default Comment;