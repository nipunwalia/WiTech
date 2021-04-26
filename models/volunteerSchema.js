const mongoose=require('mongoose');

const volunteerSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    dateofbirth:{type:String,required:true},
    gender:{type:String,required:true},
    state:{type:String,required:true},
    contact:{type:String,required:true},
    donationstatus:{type:String,required:true},
    reason:{type:String,required:true},
});

const Volunteer=mongoose.model('Volunteer',volunteerSchema);
module.exports=Volunteer;