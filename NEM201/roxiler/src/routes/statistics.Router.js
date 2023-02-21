const express =require("express");
const Statistics = require("../controllers/statistics");
const router= express.Router()

router.get("/" ,Statistics)

module.exports=router