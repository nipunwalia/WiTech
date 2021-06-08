const express=require('express');
const mongoose=require('mongoose');
const formRouter=require('./routes/formRouter');
const financeRouter=require('./routes/departments/financeRouter');
const logisticsAndOpsRouter=require('./routes/departments/logisticsandopsRouter');
const outreachAndPublicRouter=require('./routes/departments/outreachandpublicRouter');
const technicalRouter=require('./routes/departments/technicalRouter');
const marketingRouter=require('./routes/departments/marketingRouter');
const blogRouter=require('./routes/blogRouter');
const cors=require('cors');
const covidRouter=require('./routes/covidRouter');
const morgan = require('morgan');
const dotenv=require('dotenv');
dotenv.config();
const cryptr=require('cryptr');
const crypto=new cryptr(process.env.TOKEN_KEY);
const app=express();
const axios=require('axios');
const url=require('url');
const cookieparser=require('cookie-parser');
const port=process.env.PORT ||  5000;
const mongodb_url=process.env.MONGODB_URL || 'mongodb://localhost/witech';


app.use(cors());
// app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
mongoose.connect(mongodb_url , {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    
    res.render('home',{data:""});
});

async function getToken(authorizationCode){
    const params=new url.URLSearchParams({
        code:authorizationCode,
        grant_type:'authorization_code',
        client_id:`${process.env.ZOHO_CLIENT_ID}`,
        client_secret:`${process.env.ZOHO_CLIENT_SECRET}`,
        redirect_uri:'http://localhost:5000/authcallback'
    });
    const data=await axios.post('https://accounts.zoho.com/oauth/v2/token',{},{params:params});
    return data.data;
}

// make a post request for token
// redirection from authorization url
app.get('/zohoconnect',async(req,res)=>{

});

app.get('/authcallback',async(req,res)=>{
    const query=req.query;
    if(Object.keys(query).length !== 0 && query.constructor === Object){
        let data=await getToken(query.code);
        res.cookie('Witech_India_zoho',data);
        res.redirect('/');
    }
    else{
        res.send("Error");
    }
});

app.get('/about',(req,res)=>{
    res.render('about');
});

// app.get('/test',(req,res)=>{
//     res.render('partials/test');
// })

app.use('/blogs',blogRouter);
app.use('/forms',formRouter);
app.use('/finance',financeRouter);
app.use('/logs-ops',logisticsAndOpsRouter);
app.use('/outreach-public',outreachAndPublicRouter);
app.use('/technical',technicalRouter);
app.use('/marketing-creative',marketingRouter);
app.use('/covid',covidRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));

// for getting authorization
// https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.TKO2A7GBFUUHWC0PPDWAQL7JOCL4CT&scope=ZohoSheet.dataAPI.ALL&redirect_uri=https://witech-india.herokuapp.com/&access_type=offline&prompt=consent

// ?code=1000.a180520c573e1d25222c0a12b7fe77e3.fe9909d2482bf14f7c47f1c1e217de9c&location=us&accounts-server=https%3A%2F%2Faccounts.zoho.com&


