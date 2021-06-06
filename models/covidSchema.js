const mongoose=require('mongoose');

const covidSchema=mongoose.Schema({
   state:{type:String,required:true},
   cases:{type:Number,required:true,},
   recovered:{type:Number,required:true},
   death:{type:Number,required:true},
   oxygenAvailability:{type:String,required:true},
   bedsAvailability:{type:String,required:true},
   noOfVaccine:{type:String,required:true},
   vaccineAvailability:{type:String,required:true},
   waste:{type:String,required:true}
});

const Covid=mongoose.model('Covid',covidSchema);
module.exports=Covid;