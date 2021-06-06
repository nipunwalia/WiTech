const express=require('express');
const outreachAndPublicRouter=express();
// const excelsheet=require('../../services/excelsheet');
const outreachandpublic=require('../../models/out&publicSchema');

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

    var outreachandpr;
    if(req.params.id == 'out-pr-hd-opr'){
         outreachandpr=await outreachandpublic.head({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
            cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,task:req.body.task});
    }else if(req.params.id == 'evt-pln-opr'){
         outreachandpr=await outreachandpublic.eventplanner({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
            cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,task:req.body.task});
    }else if(req.params.id == 'evt-cor-opr'){
        outreachandpr=await outreachandpublic.eventcoordinator({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
            cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,task:req.body.task});
    }
    else if(req.params.id == 'out-part-spec-opr'){
        outreachandpr=await outreachandpublic.partnership({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
            cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,scale:req.body.scale,task:req.body.task});
    }
    else{
         outreachandpr=await outreachandpublic.communitybuilder({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
            cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,task:req.body.task});
    }

    let result=outreachandpr.save();

    if(result){
        res.send("Form Submitted Successfully");
    }
    else{
        res.status(404).send("Error");
    }
});

module.exports=outreachAndPublicRouter;