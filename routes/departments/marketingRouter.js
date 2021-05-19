const express=require('express');
const marketingRouter=express();

marketingRouter.get('/',(req,res)=>{
    res.render('departments/marketingandcreatives/marketing');
});


marketingRouter.get('/socialmedia/form',(req,res)=>{
    res.render('departments/marketingandcreatives/socialmedia');
});

marketingRouter.get('/marketing-spec/form',(req,res)=>{
    res.render('departments/marketingandcreatives/marketingspec');
});

marketingRouter.get('/contentwriter/form',(req,res)=>{
    res.render('departments/marketingandcreatives/contentwriter');
});

marketingRouter.get('/graphicdesign/form',(req,res)=>{
    res.render('departments/marketingandcreatives/graphicdesign');
});

module.exports=marketingRouter;