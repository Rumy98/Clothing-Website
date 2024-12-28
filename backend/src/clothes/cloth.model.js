const mongoose=require('mongoose');

const clothSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    } ,
    description:{
        type:String,
        required:true,
    } ,
    category:{
        type:String,
        required:true,
    } ,
    trending:{
        type:Boolean,
        required:true,
    } ,
    image:{
        type:String,
        required:true,
    } ,
    oldPrice:{
        type:Number,
        required:true,
    
    },
    newPrice:{
        type:Number,
        required:true,
    
    },
    
    createdAt:{
        type:Date,
        default:Date.now,
    } 
  }, {
    timestamps:true,
  });

  const Cloth = mongoose.model('Cloth', clothSchema);

  module.exports=Cloth;
