const mongoose=require('mongoose');

const outreachAndPRHeadSchema=mongoose.Schema({
   date:{type:String,required:true},
   name:{type:String,required:true},
   email:{type:String,required:true,},
   contact:{type:String,required:true},
   education:{type:String,required:true},
   cvlink:{type:String,required:true},
   question1:{type:String,required:true},
   question2:{type:String,required:true},
   task:{type:String,required:true},
});

const head=mongoose.model('out&pr_Head',outreachAndPRHeadSchema);
exports.head=head;

const eventPlannerSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    question3:{type:String,required:true},
    task:{type:String,required:true},
 });
 
const eventplanner=mongoose.model('out&pr_EventPlanner',eventPlannerSchema);
exports.eventplanner=eventplanner;

const eventCoordinatorSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    task:{type:String,required:true},
 });
 
 const eventcoordinator=mongoose.model('out&pr_EventCoordinator',eventCoordinatorSchema);
 exports.eventcoordinator=eventcoordinator;

 const partnershipSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    question3:{type:String,required:true},
    scale:{type:String,required:true},
    task:{type:String,required:true},
 });
 
 const partnership=mongoose.model('out&pr_Partnership',partnershipSchema);
 exports.partnership=partnership;

 const communityBuilderSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    question3:{type:String,required:true},
    task:{type:String,required:true},
 });
 
 const communitybuilder=mongoose.model('out&pr_communitybuilder',communityBuilderSchema);
 exports.communitybuilder=communitybuilder;
 