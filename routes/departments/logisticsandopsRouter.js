const express=require('express');
const logisticsAndOpsRouter=express();



logisticsAndOpsRouter.get('/',(req,res)=>{
    res.render('departments/logisticsandOps/logistics');
});

logisticsAndOpsRouter.get('/director',(req,res)=>{
    res.render('departments/logisticsandOps/director');
});

logisticsAndOpsRouter.get('/log-manager',(req,res)=>{
    res.render('departments/logisticsandOps/logisticsmanager');
});

logisticsAndOpsRouter.get('/ops-manager',(req,res)=>{
    res.render('departments/logisticsandOps/operationsmanager');
});

// director logisticsmanager operationsmanager

module.exports=logisticsAndOpsRouter;