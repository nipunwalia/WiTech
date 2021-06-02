const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,required:true},
    comment:{type:String,required:true}
});

const blogSchema=mongoose.Schema({
   blogid:{type:String,required:true},
   title:{type:String,required:true},
   author:{type:String,required:true},
   date:{type:Date,required:true},
   image:{type:String,required:true},
   about:{type:String,required:true},
   category:[String],
   content:{type:String,required:true},
   comments:[commentSchema],
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;