const express=require('express');
const expressAsyncHandler=require('express-async-handler');
const Mentor =require('../models/mentorSchema.js');
const Volunteer=require('../models/volunteerSchema.js');
const formRouter=express();


// testing for same email registration error pending
formRouter.post('/mentor/register',expressAsyncHandler(async(req,res)=>{
    try{
        const mentor=new Mentor({name:req.body.mName,email:req.body.mEmail,
            dob:req.body.mDob,gender:req.body.mGender,country:req.body.countryId,
            state:req.body.stateId,contact:req.body.mContact,qualification:req.body.mDegree,
            college:req.body.mCollege,currentlyworking:req.body.cw,jobtitle:req.body.mJobTitle,
            jobdescription:req.body.mJobDesc,areaofinterest:req.body.mInterest,
            skill_1:[{skilltype:req.body.mskill_1,rating:req.body.mskill_1_rating}],
            facebookprofile:req.body.mSocialFb,linkedinprofile:req.body.mSocialLn,
            otherprofile:req.body.mSocialOt
        });
        const createdmentor=await mentor.save();
        if(createdmentor){
            res.send("Data Saved");
        }else{
            res.status(404).send();
        }
    }catch(e){
        console.log(e);
    }
}));

formRouter.post('/volunteer/register',expressAsyncHandler(async(req,res)=>{
    try{
        const volunteer=new Volunteer({name:req.body.vName,email:req.body.vEmail,dateofbirth:req.body.vDob,
            gender:req.body.vGender,state:req.body.vState,
            contact:req.body.vContact,donationstatus:req.body.vDonationStatus,reason:req.body.vReason});
        const createdVolunteer=await volunteer.save();
        if(createdVolunteer){
            res.send("Data Saved");
        }else{
            res.status(404).send();
        }
    }catch(e){
        console.log(e);
    }
}));

module.exports=formRouter;