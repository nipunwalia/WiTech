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

module.exports=financeRouter;