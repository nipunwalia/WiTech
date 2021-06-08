const express=require('express');
const covidRouter=express();
const Covid = require('../models/covidSchema');
const {covidData}=require('./data.js');
const cryptr=require('cryptr');
const dotenv=require('dotenv');
dotenv.config();
const crypto=new cryptr(process.env.TOKEN_KEY);
const axios=require('axios');
const cookieparser=require('cookie-parser');
covidRouter.use(cookieparser());

// stateslist 
var statesList=['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar',"Chandigarh",'Chhattisgarh',"Dadar and Nagar Haveli",'Delhi','Goa','Gujarat','Haryana','Himachal Pradesh',
    "Jammu and Kashmir",'Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Puducherry','Punjab','Rajasthan','Sikkim','TamilNadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal'
];

// statesId
var statesIdList=["andaman_nicobar_1","andhra_pradesh_1","arunachal_pradesh_1","assam_1","bihar_1","chandigarh_1","chhattisgarh_1","dadar_and_nagar_haveli","delhi_1","goa_1","gujarat_1","haryana_1","himachal_pradesh_1",
"jammu_and_kashmir_1","jharkhand_1","karnataka_1","kerala_1","madhya_pradesh_1","maharashtra_1","manipur_1","meghalaya_1","mizoram_1","nagaland_1","odisha_1","puducherry_1",
"punjab_1","rajasthan_1","sikkim_1","tamil_nadu_1","telangana_1","tripura_1","uttar_pradesh_1","uttarakhand_1","west_bengal_1"
];

// --------------------routes--------------------------------///

covidRouter.get("/",(req,res)=>{
    res.render('covid',{states:{0:statesIdList,1:statesList}});
});

// covid info for particular state
covidRouter.get('/info',(req,res)=>{
    res.render('covid-detail');
});

// fetching data from excel sheet
covidRouter.get('/api/getData',async(req,res)=>{
    
    let zoho_cookies=req.cookies.Witech_India_zoho;
    try{
        const params={
            method:'worksheet.records.fetch',
            worksheet_name:'Covid',
            header_row:2
        };
        const header={
            Authorization:`Zoho-oauthtoken ${zoho_cookies.access_token}`,
            'Content-Type':'application/x-www-form-urlencoded'
        };
        let data=await axios.get('https://sheet.zoho.com/api/v2/nuxy5c4f34bfbb334405087a58c2b29c4bf9e',{headers:header,params:params});
        let covidData=data.data;
        res.send(covidData);
    }
    catch(err){
        // console.log(err.response.data.error_message);
        const param={
            client_id:`${process.env.ZOHO_CLIENT_ID}`,
            client_secret:`${process.env.ZOHO_CLIENT_SECRET}`,
            grant_type:'refresh_token',
            redirect_uri:'http://localhost:5000/authcallback',
            refresh_token:zoho_cookies.refresh_token
        };

        if(err.response.data.error_message === 'Valid [OAUTHTOKEN] is required for processing the request.'){
            let data=await axios.post('https://accounts.zoho.com/oauth/v2/token',{},{params:param});
            await res.cookie('Witech_India_zoho',data.data);
        }
        // 'Valid [OAUTHTOKEN] is required for processing the request.'
        res.send("Error");
    }
    // var result=await Covid.find({});
    // if(result!=0){
    //     res.send(result);
    // }else{
    //     res.status(404).send("Data not Received");
    // }
});

covidRouter.post('/api/seed',async(req,res)=>{
    var result=await Covid.insertMany(covidData);
    res.send("Saved");
});

module.exports=covidRouter;