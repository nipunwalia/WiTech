const express=require('express');
const covidRouter=express();
const Covid = require('../models/covidSchema');
const {covidData}=require('./data.js');
const dotenv=require('dotenv');
dotenv.config();
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
    covidRouter.locals.authenticated=req.oidc.isAuthenticated() ? true:false;
    if(req.cookies.Witech_India_zoho){
        res.render('covid/covid',{states:{0:statesIdList,1:statesList},loginStatus:covidRouter.locals.authenticated});
    }else{
        res.redirect(`https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${process.env.ZOHO_CLIENT_ID}&scope=ZohoSheet.dataAPI.UPDATE,ZohoSheet.dataAPI.READ&redirect_uri=http://localhost:5000/authcallback&access_type=offline`)
    }
    // res.redirect('/blogs');
});

covidRouter.get('/edit',async(req,res)=>{
    covidRouter.locals.authenticated=req.oidc.isAuthenticated() ? true:false;
    if(covidRouter.locals.authenticated == true){
        try{
            var result=await Covid.find({});
            res.render("covid/covid-datasheet",{loginStatus:covidRouter.locals.authenticated,covid:result});
            // res.render("covid/covid-data",{loginStatus:covidRouter.locals.authenticated});
        }catch(err){
            res.status(404).send("Error");
        }
    }else{
        res.render('partials/error');
    }
});

// covid info for particular state
covidRouter.get('/info',(req,res)=>{
    res.render('covid/covid-detail',{loginStatus:covidRouter.locals.authenticated});
});

// fetching data from excel sheet
covidRouter.get('/api/getData',async(req,res)=>{
   let zoho_cookies=req.cookies.Witech_India_zoho;
    zoho_cookies=JSON.parse(zoho_cookies);
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
            const param={
                client_id:`${process.env.ZOHO_CLIENT_ID}`,
                client_secret:`${process.env.ZOHO_CLIENT_SECRET}`,
                grant_type:'refresh_token',
                redirect_uri:'http://localhost:5000/authcallback',
                refresh_token:zoho_cookies.refresh_token
            };
                let data=await axios.post('https://accounts.zoho.com/oauth/v2/token',{},{params:param});
                res.cookie('Witech_India_zoho',JSON.stringify(data.data),{httpOnly:true});
            res.send("Error");
        }
    // }
    // var result=await Covid.find({});
    // // console.log(result);
    // if(result!=0){
    //     res.send(result);
    // }else{
    //     res.status(404).send("Data not Received");
    // }
});


covidRouter.post('/api/saveData',async(req,res)=>{
    covidRouter.locals.authenticated=req.oidc.isAuthenticated() ? true:false;
    if(covidRouter.locals.authenticated == true){
        try{
            // var result=await Covid.find({});
            res.send('Saved');
            // res.render("covid/covid-data",{loginStatus:covidRouter.locals.authenticated});
        }catch(err){
            res.status(404).send("Error");
        }
    }else{
        res.render('partials/error');
    }
})

covidRouter.post('/api/seed',async(req,res)=>{
    var result=await Covid.insertMany(covidData);
    res.send("Saved");
});

module.exports=covidRouter;