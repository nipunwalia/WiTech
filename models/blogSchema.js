const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({
   blogname:{type:String,required:true},
   author:{type:String,required:true,unique:true},
   date:{type:String,required:true},
   image:{type:String,required:true},
   category:[],
   content:{type:String,required:true},
   contact:{type:String,required:true},
   qualification:{type:String,required:true},
   college:{type:String,required:true},
   currentlyworking:{type:String,required:true},
   jobtitle:{type:String},
   jobdescription:{type:String},
   areaofinterest:{type:String,required:true},
   skill_1:[{
      skilltype:String,
      rating:String
   }],
   facebookprofile:{type:String,required:true,unique:true},
   linkedinprofile:{type:String,required:true,unique:true},
   otherprofile:{type:String},
});

const Blog=mongoose.model('Mentor',blogSchema);
module.exports=Blog;