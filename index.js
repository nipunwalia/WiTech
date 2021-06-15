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
const app=express();
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

// home page
app.get('/',(req,res)=>{
    app.locals.authenticated=req.oidc.isAuthenticated() ? true:false;
    res.render('home',{data:"",loginStatus:app.locals.authenticated});
});

// await encryptData("jatin123}");
// auth0 profile
app.get('/profile',requiresAuth(),(req,res)=>{
    res.render('userprofile');
})

// autho callback
app.get('/callback',(req,res)=>{});

// about page
app.get('/about',(req,res)=>{
   
    res.render('about',{loginStatus:app.locals.authenticated});
});

app.use('/blogs',blogRouter);
app.use('/forms',formRouter);
app.use('/finance',financeRouter);
app.use('/logs-ops',logisticsAndOpsRouter);
app.use('/outreach-public',outreachAndPublicRouter);
app.use('/technical',technicalRouter);
app.use('/marketing-creative',marketingRouter);
app.use('/covid',covidRouter);

app.listen(port,()=>console.log(`App is listening at ${port}`));