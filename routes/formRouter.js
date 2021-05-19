const express=require('express');
const expressAsyncHandler=require('express-async-handler');
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
    var result = await excelsheet.uploadData([[req.body.mName,req.body.mEmail,
        req.body.mDob,req.body.mGender,req.body.countryId,
      req.body.stateId,req.body.mContact,req.body.mDegree,
        req.body.mCollege,req.body.cw,req.body.mJobTitle,
        req.body.mJobDesc,req.body.mInterest,
        req.body.mskill_1,req.body.mskill_1_rating,
        req.body.mSocialFb,req.body.mSocialLn,
        req.body.mSocialOt]],"MentorForm!A:Q");
    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }

}));

// Volunteerform register
formRouter.post('/api/volunteer/register',expressAsyncHandler(async(req,res)=>{
    var result = await excelsheet.uploadData([[req.body.vName,req.body.vEmail,
        req.body.vDob,req.body.vGender,
      req.body.vState,req.body.vContact,req.body.vDonationStatus,req.body.vReason]],"VolunteerForm!A:H");
    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }
}));

// response
formRouter.get('/response',(req,res)=>{
    var cookies=req.cookies;
     if(cookies.formresponse == 'valid'){
         res.render("partials/formsuccess");
     }else{
         res.render('partials/error');
     }
 });

module.exports=formRouter;