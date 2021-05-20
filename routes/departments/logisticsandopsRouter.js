const express=require('express');
const logisticsAndOpsRouter=express();
const excelsheet=require('../../services/excelsheet');


logisticsAndOpsRouter.get('/',(req,res)=>{
    res.render('departments/logisticsandOps/logistics');
});

logisticsAndOpsRouter.get('/director/form',(req,res)=>{
    res.render('departments/logisticsandOps/director');
});

logisticsAndOpsRouter.get('/log-manager/form',(req,res)=>{
    res.render('departments/logisticsandOps/logisticsmanager');
});

logisticsAndOpsRouter.get('/ops-manager/form',(req,res)=>{
    res.render('departments/logisticsandOps/operationsmanager');
});

// 'log-oper-dir-lgopr' : director
// 'log-man-lgopr' : logistics manager
// 'opr-man-lgopr' : operations manager

logisticsAndOpsRouter.post('/api/:id/register',async(req,res)=>{
    var result;
    
    if(req.params.id == 'log-oper-dir-lgopr'){
        result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.scale,req.body.task]],'Log-Opr-dir!A:M');

    }else if(req.params.id == 'log-man-lgopr'){
         result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5]],'Log-manager!A:K');
    }
    else{
         result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5]],'Opr-manager!A:K');
    }

    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }
});

module.exports=logisticsAndOpsRouter;