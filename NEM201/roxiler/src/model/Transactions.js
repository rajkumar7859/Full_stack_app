const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  title:String,
  price:Number,
  description:String,
  image: String,
  sold:Boolean,
  dateOfSale:Date,
});
 
module.exports=mongoose.model('Transactions', TransactionSchema );