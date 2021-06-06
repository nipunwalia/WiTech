const mongoose=require('mongoose');

const directorSchema=mongoose.Schema({
   date:{type:String,required:true}, 
   name:{type:String,required:true},
   email:{type:String,required:true,},
   contact:{type:String,required:true},
   education:{type:String,required:true},
   cvlink:{type:String,required:true},
   question1:{type:String,required:true},
   question2:{type:String,required:true},
   question3:{type:String,required:true},
   question4:{type:String,required:true},
   question5:{type:String,required:true},
   scale:{type:String,required:true},
   task:{type:String,required:true},
});

const director=mongoose.model('logisticsandopr_Director',directorSchema);
exports.director=director;

const LogisticsmanagerSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    question3:{type:String,required:true},
    question4:{type:String,required:true},
    question5:{type:String,required:true},
 });
 
 const logisticsmanager=mongoose.model('logistics_Manager',LogisticsmanagerSchema);
 exports.logisticsmanager=logisticsmanager;

 const OperationsmanagerSchema=mongoose.Schema({
    date:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,},
    contact:{type:String,required:true},
    education:{type:String,required:true},
    cvlink:{type:String,required:true},
    question1:{type:String,required:true},
    question2:{type:String,required:true},
    question3:{type:String,required:true},
    question4:{type:String,required:true},
    question5:{type:String,required:true},
 });
 
 const operationsmanager=mongoose.model('opr_Manager',OperationsmanagerSchema);
 exports.operationsmanager=operationsmanager;