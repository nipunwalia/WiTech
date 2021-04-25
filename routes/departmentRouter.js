const express=require('express');
const departmentRouter=express();


departmentRouter.get('/technical',(req,res)=>{
    res.render('departments/technical');
});

departmentRouter.get('/finance',(req,res)=>{
    res.render('departments/finance');
});

departmentRouter.get('/marketing',(req,res)=>{
    res.render('departments/marketing');
});

departmentRouter.get('/outreach',(req,res)=>{
    res.render('departments/outreach');
});

departmentRouter.get('/logistics',(req,res)=>{
    res.render('departments/logistics');
});

module.exports=departmentRouter;