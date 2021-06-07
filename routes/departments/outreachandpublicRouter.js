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
    try{
        var outreachandpr;
        if(req.params.id == 'out-pr-hd-opr'){
            outreachandpr=new outreachandpublic.head({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,task:req.body.task});
        }else if(req.params.id == 'evt-pln-opr'){
            outreachandpr=new outreachandpublic.eventplanner({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,task:req.body.task});
        }else if(req.params.id == 'evt-cor-opr'){
            outreachandpr=new outreachandpublic.eventcoordinator({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,task:req.body.task});
        }
        else if(req.params.id == 'out-part-spec-opr'){
            outreachandpr=new outreachandpublic.partnership({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,scale:req.body.scale,task:req.body.task});
        }
        else{
            outreachandpr=new outreachandpublic.communitybuilder({date:req.body.date,name:req.body.name,email:req.body.email,contact:req.body.contact,education:req.body.education,
                cvlink:req.body.cv,question1:req.body.q1,question2:req.body.q2,question3:req.body.q3,task:req.body.task});
        }
        await outreachandpr.save();
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

module.exports=outreachAndPublicRouter;