//external imports
const express = require("express");
const router = express.Router();

//internal imports
const { checkOut } = require("../controller/paymentController");

router.post("/checkout", checkOut);

//export

module.exports = router;
