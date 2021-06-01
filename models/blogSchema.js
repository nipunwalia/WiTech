const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({
    name:{type:String,required:true},
    date:{type:String,required:true},
    comment:{type:String,required:true}
});

const blogSchema=mongoose.Schema({
   title:{type:String,required:true},
   author:{type:String,required:true},
   date:{type:String,required:true},
   image:{type:String,required:true},
   category:[String],
   content:{type:String,required:true},
   comments:[commentSchema],
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;