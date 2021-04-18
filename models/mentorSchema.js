const mongoose=require('mongoose');

const mentorSchema=mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true,unique:true},
   age:{type:Number,required:true},
   gender:{type:String,required:true},
   country:{type:String,required:true},
   state:{type:String,required:true},
   contact:{type:String,required:true},
   qualification:{type:String,required:true},
   college:{type:String,required:true},
   currentlyworking:{type:String,required:true},
   jobtitle:{type:String,required:true},
   jobdescription:{type:String,required:true},
   skill_1:{type:String},
   skill_2:{type:String},
   skill_3:{type:String},
   facebookprofile:{type:String,required:true,unique:true},
   linkedinprofile:{type:String,required:true,unique:true},
   otherprofile:{type:String},
});

const Mentor=mongoose.model('Mentor',mentorSchema);
module.exports=Mentor;