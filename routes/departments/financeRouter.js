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
            
            finance=await financeSchema.generalManagerFinance({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,question4:req.body.q4,question5:req.body.q5,question6:req.body.q6,
                task:req.body.task});
                
        }else{
            finance=await financeSchema.accountant({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,
                question4:req.body.q4,task:req.body.task});
        }
        let result=finance.save();
        
        if(result){
            res.send("Form Submitted Successfully");
        }
        else{
            res.status(404).send("Error");
        }
    }catch(err){
        console.log(err);
    }

});

module.exports=financeRouter;