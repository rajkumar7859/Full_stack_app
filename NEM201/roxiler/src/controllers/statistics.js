const Transactions = require("../model/Transactions");


const Statistics= async(req,res)=>{
    try {
        const transaction= await Transactions.find();
        res.status(200).json({message:"All statistics data "} , transaction)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports= Statistics