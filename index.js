const express=require('express');
const mongoose=require('mongoose');
const mentorRouter=require('./routes/mentorRouter');
const cors=require('cors');
const app=express();
const port=5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/witech', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.set('view engine','ejs');
console.log("connected");
app.get('/home',(req,res)=>{
    // route for home page
    res.render('home');
});

app.get('/mentorform',(req,res)=>{
    res.render('fsign');
});
app.use('/api/mentor',mentorRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));