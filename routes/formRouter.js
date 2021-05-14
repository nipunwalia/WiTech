const { assert } = require('console');
const express=require('express');
const expressAsyncHandler=require('express-async-handler');
const formRouter=express();
const {google}=require("googleapis");
var path=require('path');

// testing for same email registration error pending
formRouter.post('/mentor/register',expressAsyncHandler(async(req,res)=>{
    try{
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
        res.send('Form submitted successfully');
    }catch(e){
        res.status(404).send("Error");
    }
}));


module.exports=formRouter;