//external imports
const express = require("express");
const router = express.Router();

//internal imports
const {uploadProduct,getAllProducts} = require("../controller/productController");

router.post("/addProduct", uploadProduct);
router.get("/getAllProducts", getAllProducts);

//export

module.exports = router;
