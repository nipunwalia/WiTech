const express=require('express');
// const {google}=require("googleapis");
// const expressAsyncHandler = require('express-async-handler');
const covidRouter=express();
// const excelsheet=require('../services/excelsheet');
const Covid = require('../models/covidSchema');
const {covidData}=require('./data.js');


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
})

// fetching data from excel sheet
covidRouter.get('/api/getData',async(req,res)=>{
    var result=await Covid.find({});
    if(result!=0){
        res.send(result);
    }else{
        res.status(404).send("Data not Received");
    }
});

covidRouter.post('/api/seed',async(req,res)=>{
    var result=await Covid.insertMany(covidData);
    res.send("Saved");
});

module.exports=covidRouter;