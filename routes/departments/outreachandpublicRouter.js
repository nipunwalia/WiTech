const express=require('express');
const outreachAndPublicRouter=express();
const excelsheet=require('../../services/excelsheet');

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

// 'out-pr-hd-opr' : head
// 'evt-pln-opr': event planner
// 'evt-cor-opr' :  event coordinator
// 'out-part-spec-opr' : outreach and partnership specialist
// 'com-build-opr' : community builder


outreachAndPublicRouter.post('/api/:id/register',async(req,res)=>{
    var result;
    if(req.params.id == 'out-pr-hd-opr'){
         result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.task]],'Outr-PR-Head!A:I');
    }else if(req.params.id == 'evt-pln-opr'){
         result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.task]],'Outr-PR-evnt-pln!A:J');
    }else if(req.params.id == 'evt-cor-opr'){
        result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.task]],'Outr-PR-evnt-co!A:I');
    }
    else if(req.params.id == 'out-part-spec-opr'){
        result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.scale,req.body.task]],'Outr-PR-spec!A:K');
    }
    else{
         result=await excelsheet.uploadData([[req.body.date,req.body.name,req.body.email,req.body.contact,req.body.education,
            req.body.cv,req.body.q1,req.body.q2,req.body.q3,req.body.task]],'Outr-PR-community!A:J');
    }

    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }
});

module.exports=outreachAndPublicRouter;