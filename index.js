const express=require('express');
const mongoose=require('mongoose');
const formRouter=require('./routes/formRouter');
const departmentRouter=require('./routes/departmentRouter');
const cors=require('cors');
const covidRouter=require('./routes/covidRouter');
const morgan = require('morgan');
const app=express();
const port=5000;

// stateslist for volunteer form
var statesList=['Andaman and Nicobar Island','AndhraPradesh','ArunachalPradesh','Assam','Bihar',"Chandigarh",'Chhattisgarh',"Dadar and Nagar Haveli",'Delhi','Goa','Gujarat','Haryana','HimachalPradesh',
    "Jammu and Kashmir",'Jharkhand','Karnataka','Kerala','MadhyaPradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Puducherry','Punjab','Rajasthan','Sikkim','TamilNadu','Telangana','Tripura','UttarPradesh','Uttarakhand','WestBengal'
];

// andaman nicobar remaining
var statesIdList=["andaman_nicobar_1","andhra_pradesh_1","arunachal_pradesh_1","assam_1","bihar_1","chandigarh_1","chhattisgarh_1","dadar_and_nagar_haveli","delhi_1","goa_1","gujarat_1","haryana_1","himachal_pradesh_1",
"jammu_and_kashmir_1","jharkhand_1","karnataka_1","kerala_1","madhya_pradesh_1","maharashtra_1","manipur_1","meghalaya_1","mizoram_1","nagaland_1","odisha_1","puducherry_1",
"punjab_1","rajasthan_1","sikkim_1","tamil_nadu_1","telangana_1","tripura_1","uttar_pradesh_1","uttarakhand_1","west_bengal_1"
];

app.use(cors());
// app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// mongoose.connect('mongodb://localhost/witech', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/mentorform',(req,res)=>{
    res.render('forms/mentorform');
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/volunteer",(req,res)=>{
    res.render('forms/volunteerform',{states:statesList});
});

app.get("/covid",(req,res)=>{
    res.render('covid',{statesList:statesIdList});
})

app.use('/api/forms',formRouter);
app.use('/department',departmentRouter);
app.use('/api/covid',covidRouter);
app.listen(port,()=>console.log(`App is listening at ${port}`));