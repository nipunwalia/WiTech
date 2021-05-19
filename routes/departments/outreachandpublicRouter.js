const express=require('express');
const outreachAndPublicRouter=express();


outreachAndPublicRouter.get('/',(req,res)=>{
    res.render("departments/publicandoutreach/outreach");
});

outreachAndPublicRouter.get('/head',(req,res)=>{
    res.render("departments/publicandoutreach/head");
});

outreachAndPublicRouter.get('/out-part-spec',(req,res)=>{
    res.render("departments/publicandoutreach/outreachPartnership");
});

outreachAndPublicRouter.get('/community-builder',(req,res)=>{
    res.render("departments/publicandoutreach/communitybuilder");
});

outreachAndPublicRouter.get('/event-coordinator',(req,res)=>{
    res.render("departments/publicandoutreach/eventcoordinator");
});

outreachAndPublicRouter.get('/event-planner',(req,res)=>{
    res.render("departments/publicandoutreach/eventplanner");
});

module.exports=outreachAndPublicRouter;