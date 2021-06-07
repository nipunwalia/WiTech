const express=require('express');
const logisticsAndOpsRouter=express();
const logisticsandoperation=require('../../models/logisticsandoprSchema');


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
    try{ 
        var logisticsandopr;
        if(req.params.id == 'log-oper-dir-lgopr'){
            logisticsandopr=new logisticsandoperation.director({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,
                education:req.body.education,cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,
                question3:req.body.q3,question4:req.body.q4,question5:req.body.q5,scale:req.body.scale,
                task:req.body.task});

        }else if(req.params.id == 'log-man-lgopr'){
            logisticsandopr=new logisticsandoperation.logisticsmanager({date:req.body.date,name:req.body.name,
                email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,
                question4:req.body.q4,question5:req.body.q5});
        }
        else{
            logisticsandopr=new logisticsandoperation.operationsmanager({date:req.body.date,name:req.body.name,
                email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,
                question4:req.body.q4,question5:req.body.q5});
        }
        await logisticsandopr.save();
        res.send("Form Submitted Successfully");
    }catch(err){
        let errorType=Object.keys(err.keyPattern).find(x=>x=='email');
        if(err.code == 11000 && errorType == 'email'){
            res.status(404).send("Email Already Exists!");
        }
        else{
            res.status(404).send("Error");
        }
    }
});

module.exports=logisticsAndOpsRouter;