const express=require('express');
const expressAsyncHandler=require('express-async-handler');
const Mentor =require('../models/mentorSchema.js');
const mentorRouter=express();


// testing for same email registration error pending
mentorRouter.post('/register',expressAsyncHandler(async(req,res)=>{
    console.log(req.body);
    
    const mentor=new Mentor({name:req.body.name,email:req.body.email,
        age:req.body.age,gender:req.body.gender,country:req.body.country,
        state:req.body.state,contact:req.body.contact,qualification:req.body.qualification,
        college:req.body.college,currentlyworking:req.body.currentlyworking,jobtitle:req.body.jobtitle,
        jobdescription:req.body.jobdescription,skill_1:req.body.skill_1,skill_2:req.body.skill_2,
        skill_3:req.body.skill_3,facebookprofile:req.body.facebookprofile,linkedinprofile:req.body.linkedinprofile,
        otherprofile:req.body.otherprofile
    });
    const createdmentor=await mentor.save();
    if(createdmentor){
        res.send("Data Saved");
    }else{
        res.status(404).send();
    }
    // res.send("helo");
}));

module.exports=mentorRouter;