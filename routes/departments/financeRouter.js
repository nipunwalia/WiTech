const express=require('express');
const financeRouter=express();

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
    if(req.params.id == "gen-man-fin"){

    }else{
        
    }
})
module.exports=financeRouter;