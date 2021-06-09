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
const {getToken}=require('./services/zohosheet');
const app=express();
const http=require('http');
const {auth,requiresAuth}=require('express-openid-connect'); 
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
app.use(
    auth({
      authRequired:false,
      auth0Logout:true,
      issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
      baseURL: process.env.AUTH0_BASE_URL,
      clientID: process.env.AUTH0_CLIENT_ID,
      secret: process.env.AUTH0_SECRET,
      idpLogout: true,
    })
);

app.use(async function(req,res,next){
    res.locals.authenticated=req.oidc.isAuthenticated() ? true:false;
    // const options={
    //     hostname:"localhost",
    //     port:5000,
    //     path:'profile',
    //     method:'GET',
    // }
    // const request = http.request(options, response => {
    //     console.log(`statusCode: ${response.statusCode}`)
      
    //     response.on('data', d => {
    //       process.stdout.write(d)
    //     })
    //   })
      
    //   request.on('error', error => {
    //     console.error(error)
    //   })
      
    //   request.end()
    // let data=await fetch(');
    // console.log(data);
    res.locals.userEmail="";
});

async function fetchdata(){
    const options={
        hostname:"localhost",
        port:5000,
        path:'profile',
        method:'GET',
    }
    const request = http.request(options, response => {
        console.log(`statusCode: ${response.statusCode}`)
        response.on('data', d => {
          process.stdout.write(d)
        })
      })
      request.on('error', error => {
        console.error(error)
      })
      request.end()
}

// fetchdata();
// home page
app.get('/',(req,res)=>{
    let loginStatus=req.oidc.isAuthenticated() ? true:false;
    res.render('home',{data:"",loginStatus:loginStatus});
});

// auth0 profile
app.get('/profile',requiresAuth(),(req,res)=>{
    res.send(JSON.stringify(req.oidc.user));
})

// autho callback
app.get('/callback',(req,res)=>{});

//  for zohosheets callback
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

// about page
app.get('/about',(req,res)=>{
    let loginStatus=req.oidc.isAuthenticated() ? true:false;
    res.render('about',{loginStatus:loginStatus});
});


app.get('/test',(req,res)=>{
    res.render('login-landing');
})

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
