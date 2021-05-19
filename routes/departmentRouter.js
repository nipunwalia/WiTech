const express=require('express');
const departmentRouter=express();
const financeRouter=require('./departments/financeRouter');
const outreachAndPublicRouter=require('./departments/outreachandpublicRouter');
const logisticsAndOpsRouter=require('./departments/logisticsandopsRouter');

// departmentRouter.get('/technical',(req,res)=>{
//     res.render('departments/technical');
// });

// departmentRouter.use('/finance',(req,res,next));
// // departmentRouter.use('/outreach',outreachAndPublicRouter);
// // departmentRouter.use('/logistics',logisticsAndOpsRouter);

// departmentRouter.get('/marketing',(req,res)=>{
//     res.render('departments/marketing');
// });

module.exports=departmentRouter;