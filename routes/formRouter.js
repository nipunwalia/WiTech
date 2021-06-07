const express=require('express');
const expressAsyncHandler=require('express-async-handler');
const Mentor = require('../models/mentorSchema');
const Volunteer = require('../models/volunteerSchema');
const formRouter=express();
const excelsheet=require('../services/excelsheet');

var statesList=['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar',"Chandigarh",'Chhattisgarh',"Dadar and Nagar Haveli",'Delhi','Goa','Gujarat','Haryana','Himachal Pradesh',
    "Jammu and Kashmir",'Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Puducherry','Punjab','Rajasthan','Sikkim','TamilNadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal'
];

// volunteer
formRouter.get("/volunteer",(req,res)=>{
    res.render('forms/volunteerform',{states:statesList});
});

// mentorform
formRouter.get('/mentorform',(req,res)=>{
    res.render('forms/mentorform');
});

// mentor Register
formRouter.post('/api/mentor/register',expressAsyncHandler(async(req,res)=>{
    try{
        let mentor =new Mentor({"date":req.body.date,"name":req.body.mName,"email":req.body.mEmail,
            "dob":req.body.mDob,"gender":req.body.mGender,"country":req.body.countryId,
        "state":req.body.stateId,"contact":req.body.mContact,"qualification":req.body.mDegree,
            "college":req.body.mCollege,"currentlyworking":req.body.cw,"jobtitle":req.body.mJobTitle,
            "jobdescription":req.body.mJobDesc,"areaofinterest":req.body.mInterest,
            "skill_1":[{"skilltype":req.body.mskill_1,"rating":req.body.mskill_1_rating}],
            "facebookprofile":req.body.mSocialFb,"linkedinprofile":req.body.mSocialLn,
            "otherprofile":req.body.mSocialOt});
        await mentor.save();
        res.send("Form Submitted Successfully");
    }catch(err){
        let errorType=Object.keys(err.keyPattern).find(x=>x=='email');
        if(err.code == 11000 && errorType == 'email'){
            res.status(404).send("Email Already Exists!");
        }else{
            res.status(404).send("Error");
        }
    }
}));

// Volunteerform register
formRouter.post('/api/volunteer/register',expressAsyncHandler(async(req,res)=>{
    
    try{
        let volunteer=new Volunteer({"date":req.body.date,"name":req.body.vName,"email":req.body.vEmail,
            "dob":req.body.vDob,"gender":req.body.vGender,
        "state":req.body.vState,"contact":req.body.vContact,"donationstatus":req.body.vDonationStatus,
        "reason":req.body.vReason
        });
        await volunteer.save();
        res.send('Form submitted Successfull');
    }catch(err){
        let errorType=Object.keys(err.keyPattern).find(x=>x=='email');
        if(err.code == 11000 && errorType == 'email'){
            res.status(404).send("Email Already Exists!");
        }
        else{
            res.status(404).send(err);
        }
    }
}));

// response
formRouter.get('/response',(req,res)=>{
         res.render("partials/formsuccess");
 });

module.exports=formRouter;