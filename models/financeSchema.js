const mongoose=require('mongoose');

const generalManagerFinanceSchema=mongoose.Schema({
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
   question6:{type:String,required:true},
   task:{type:String,required:true},
});

const generalManagerFinance=mongoose.model('finance_GeneralManager',generalManagerFinanceSchema);
exports.generalManagerFinance=generalManagerFinance;

const accountantSchema=mongoose.Schema({
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
    task:{type:String,required:true},
 });
 
 const accountant=mongoose.model('finance_Accountant',accountantSchema);
 exports.accountant=accountant;