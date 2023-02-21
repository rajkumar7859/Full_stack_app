const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String },
  sold: { type: Boolean },
  dateOfSale: { type: String },
});

module.exports=mongoose.model("transaction" , TransactionSchema)