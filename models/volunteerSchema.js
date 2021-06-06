const mongoose=require('mongoose');

const volunteerSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    dob:{type:String,required:true},
    gender:{type:String,required:true},
    state:{type:String,required:true},
    contact:{type:String,required:true},
    donationstatus:{type:String,required:true},
    reason:{type:String,required:true},
});

const Volunteer=mongoose.model('Volunteer',volunteerSchema);
module.exports=Volunteer;