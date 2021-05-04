const express=require('express');
const expressAsyncHandler=require('express-async-handler');
// const Mentor =require('../models/mentorSchema.js');
// const Volunteer=require('../models/volunteerSchema.js');
const formRouter=express();
const {google}=require("googleapis");

// testing for same email registration error pending
formRouter.post('/mentor/register',expressAsyncHandler(async(req,res)=>{
    try{
        // const mentor=new Mentor({name:req.body.mName,email:req.body.mEmail,
        //     dob:req.body.mDob,gender:req.body.mGender,country:req.body.countryId,
        //     state:req.body.stateId,contact:req.body.mContact,qualification:req.body.mDegree,
        //     college:req.body.mCollege,currentlyworking:req.body.cw,jobtitle:req.body.mJobTitle,
        //     jobdescription:req.body.mJobDesc,areaofinterest:req.body.mInterest,
        //     skill_1:[{skilltype:req.body.mskill_1,rating:req.body.mskill_1_rating}],
        //     facebookprofile:req.body.mSocialFb,linkedinprofile:req.body.mSocialLn,
        //     otherprofile:req.body.mSocialOt
        // });
        // const createdmentor=await mentor.save();
        // if(createdmentor){
        //     res.send("Data Saved");
        // }else{
        //     res.status(404).send();
        // }
        const auth=new google.auth.GoogleAuth({
            keyFile:'client_secret.json',
            scopes:"https://www.googleapis.com/auth/spreadsheets",

        });
        // Create client instance for auth
        const client=await auth.getClient();
        const googleSheets=google.sheets({version:"v4",auth:client});
        const spreadsheetId="1SZQ9bTqhlYdkxarcOFMIlFApI57Cwpan33r0kTUZzCw";
        
        var response=await googleSheets.spreadsheets.values.append({auth,spreadsheetId,range:"Sheet2!A:Q",valueInputOption:"USER_ENTERED",
        resource:{
            values:[[req.body.mName,req.body.mEmail,
                    req.body.mDob,req.body.mGender,req.body.countryId,
                  req.body.stateId,req.body.mContact,req.body.mDegree,
                    req.body.mCollege,req.body.cw,req.body.mJobTitle,
                    req.body.mJobDesc,req.body.mInterest,
                    req.body.mskill_1,req.body.mskill_1_rating,
                    req.body.mSocialFb,req.body.mSocialLn,
                    req.body.mSocialOt]]
        }});
     
        res.send("Form Submition Successfull");
    }catch(e){
        console.log(e);
        res.status(404).send("Error");
    }
}));

formRouter.post('/volunteer/register',expressAsyncHandler(async(req,res)=>{
    try{
        // const volunteer=new Volunteer({name:req.body.vName,email:req.body.vEmail,dateofbirth:req.body.vDob,
        //     gender:req.body.vGender,state:req.body.vState,
        //     contact:req.body.vContact,donationstatus:req.body.vDonationStatus,reason:req.body.vReason});
        // const createdVolunteer=await volunteer.save();
        // if(createdVolunteer){
        //     res.send("Data Saved");
        // }else{
        //     res.status(404).send();
        // }

        const auth=new google.auth.GoogleAuth({
            keyFile:'client_secret.json',
            scopes:"https://www.googleapis.com/auth/spreadsheets",

        });
        // Create client instance for auth
        const client=await auth.getClient();
        const googleSheets=google.sheets({version:"v4",auth:client});
        const spreadsheetId="1SZQ9bTqhlYdkxarcOFMIlFApI57Cwpan33r0kTUZzCw";
        
        await googleSheets.spreadsheets.values.append({auth,spreadsheetId,range:"Sheet3!A:H",valueInputOption:"USER_ENTERED",
        resource:{
            values:[[req.body.vName,req.body.vEmail,
                    req.body.vDob,req.body.vGender,
                  req.body.vState,req.body.vContact,req.body.vDonationStatus,req.body.vReason]]
                 }
        });
        res.send("Form Submition Successfull");
    }catch(e){
        res.status(404).send("Error");
    }
    
}));

module.exports=formRouter;