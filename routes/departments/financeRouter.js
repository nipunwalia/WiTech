const express=require('express');
const financeSchema = require('../../models/financeSchema');
const financeRouter=express();
// const excelsheet=require('../../services/excelsheet');

financeRouter.get('/',(req,res)=>{
    res.render('departments/finance/finance');
}); 

financeRouter.get('/accounts/form',(req,res)=>{
    res.render('departments/finance/accountform');
});

financeRouter.get('/gen-manager/form',(req,res)=>{
    res.render('departments/finance/genmanagerform');
});

// General Manager: 'gen-man-fin',Accountant: 'account-fin'

financeRouter.post('/api/:id/register',async(req,res)=>{
    try{
        let finance;
        if(req.params.id == "gen-man-fin"){
            finance=new financeSchema.generalManagerFinance({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,question4:req.body.q4,question5:req.body.q5,question6:req.body.q6,
                task:req.body.task});
        }else{
            finance=new financeSchema.accountant({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,
                question4:req.body.q4,task:req.body.task});
        }
        await finance.save();
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

module.exports=financeRouter;