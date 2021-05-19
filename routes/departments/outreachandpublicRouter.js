const express=require('express');
const outreachAndPublicRouter=express();


outreachAndPublicRouter.get('/',(req,res)=>{
    res.render("departments/publicandoutreach/outreach");
});

outreachAndPublicRouter.get('/head/form',(req,res)=>{
    res.render("departments/publicandoutreach/head");
});

outreachAndPublicRouter.get('/out-part-spec/form',(req,res)=>{
    res.render("departments/publicandoutreach/outreachPartnership");
});

outreachAndPublicRouter.get('/community-builder/form',(req,res)=>{
    res.render("departments/publicandoutreach/communitybuilder");
});

outreachAndPublicRouter.get('/event-coordinator/form',(req,res)=>{
    res.render("departments/publicandoutreach/eventcoordinator");
});

outreachAndPublicRouter.get('/event-planner/form',(req,res)=>{
    res.render("departments/publicandoutreach/eventplanner");
});

module.exports=outreachAndPublicRouter;