const express=require('express');
const financeRouter=express();
const excelsheet=require('../../services/excelsheet');

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
    var result;
    

    if(req.params.id == "gen-man-fin"){
        result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.task]]
            ,"Fin-Gen-Manager!A:M"
            );
            
    }else{
        result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.task]],'Fin-Accountant!A:K');
    }
    
    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }
});

module.exports=financeRouter;