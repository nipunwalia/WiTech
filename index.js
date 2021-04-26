const express=require('express');
const mongoose=require('mongoose');
const formRouter=require('./routes/formRouter');
const departmentRouter=require('./routes/departmentRouter');
const cors=require('cors');
const morgan = require('morgan');
const app=express();
const port=5000;

// stateslist for volunteer form
var statesList=['AndhraPradesh','ArunachalPradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','HimachalPradesh',
    'Jharkhand','Karnataka','Kerala','MadhyaPradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Punjab','Rajasthan','Sikkim','TamilNadu','Telangana','Tripura','UttarPradesh','Uttarakhand','WestBengal'
];

app.use(cors());
app.use(morgan('tiny'));
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

app.use('/api/forms',formRouter);
app.use('/department',departmentRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));