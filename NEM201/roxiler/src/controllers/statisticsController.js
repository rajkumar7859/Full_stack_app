const  axios= require("axios");
const Transactions = require("../model/Transactions")
exports.getStatistics = async (req, res) => {
  try {
const response = await axios.get(`https://s3.amazonaws.com/roxiler.com/product_transaction.json`)
const transaction=response.data
await Transactions.insertMany(transaction)

    res.status(200).json(transaction)
   console.log("transaction" , transaction);
  } catch (err) {
    res.status(500).json(err.message);
    console.log(`Error getting user: ${err}` , err.message);
  }
};
