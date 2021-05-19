const express=require('express');
const technicalRouter=express();

technicalRouter.get('/',(req,res)=>{
    res.render('departments/technical/technical');
});


technicalRouter.get('/frontend/form',(req,res)=>{
    res.render('departments/technical/frontendform');
})

technicalRouter.get('/backend/form',(req,res)=>{
    res.render('departments/technical/backendform');
});

technicalRouter.get('/content-graphics/form',(req,res)=>{
    res.render('departments/technical/contentandgraphics');
})

module.exports=technicalRouter;