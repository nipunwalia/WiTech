const express=require('express');
// const mongoose=require('mongoose');
const formRouter=require('./routes/formRouter');
const financeRouter=require('./routes/departments/financeRouter');
const logisticsAndOpsRouter=require('./routes/departments/logisticsandopsRouter');
const outreachAndPublicRouter=require('./routes/departments/outreachandpublicRouter');
const technicalRouter=require('./routes/departments/technicalRouter');
const marketingRouter=require('./routes/departments/marketingRouter');
const cors=require('cors');
const covidRouter=require('./routes/covidRouter');
const morgan = require('morgan');
const dotenv=require('dotenv');
dotenv.config();
const app=express();
const port=process.env.PORT ||  5000;

app.use(cors());
// app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// mongoose.connect('mongodb://localhost/witech', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{data:""});
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.use('/forms',formRouter);
app.use('/finance',financeRouter);
app.use('/logs-ops',logisticsAndOpsRouter);
app.use('/outreach-public',outreachAndPublicRouter);
app.use('/technical',technicalRouter);
app.use('/marketing-creative',marketingRouter);
app.use('/covid',covidRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));