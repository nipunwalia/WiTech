const express=require('express');
const mongoose=require('mongoose');
const mentorRouter=require('./routes/mentorRouter');
const departmentRouter=require('./routes/departmentRouter');
const cors=require('cors');
const app=express();
const port=5000;

var statesList=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh',
    'Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// mongoose.connect('mongodb://localhost/witech', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/mentorform',(req,res)=>{
    res.render('forms/mentorform');
});

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/volunteer",(req,res)=>{
    res.render('forms/volunteerform',{states:statesList});
})

app.use('/api/mentor',mentorRouter);
app.use('/department',departmentRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));