const express=require('express');
const {google}=require("googleapis");
const expressAsyncHandler = require('express-async-handler');
const covidRouter=express();

covidRouter.get('/getData',async(req,res)=>{
    try{
        const auth=new google.auth.GoogleAuth({
            keyFile:'client_secret.json',
            scopes:"https://www.googleapis.com/auth/spreadsheets",

        });
        // Create client instance for auth
        const client=await auth.getClient();

        // // Instance of google sheets api
        const googleSheets=google.sheets({version:"v4",auth:client});

        const spreadsheetId="1SZQ9bTqhlYdkxarcOFMIlFApI57Cwpan33r0kTUZzCw";
        // get metadata about spreadsheet
        // const metaData=await googleSheets.spreadsheets.get({
        //     auth,
        //     spreadsheetId,
        // });
        // read rows from spreadsheet
        const getRows=await googleSheets.spreadsheets.values.get({auth,spreadsheetId,range:"Sheet1!A:I"});
        res.send(getRows.data.values);
    }catch(e){
        res.status(404).send("Data not Received");
    }
});


module.exports=covidRouter;