const { default: axios } = require("axios");
const Transactions = require("../model/Transactions");

exports.getStatistics = async (req, res) => {
  try {
const data = await axios.get(`https://s3.amazonaws.com/roxiler.com/product_transaction.json`)
const mainData=data.data

const transaction= Transactions.insertMany(mainData)

    res.status(200).json(mainData )
   console.log("transaction" , transaction);
  } catch (err) {
    res.status(500).json(err.message);
    console.log(`Error getting user: ${err}` , err.message);
  }
};
