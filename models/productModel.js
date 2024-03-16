//external imports
const { Schema, model } = require("mongoose");

//create product schema
const productSchema = new Schema({
	brand: {
		type: String,
		required: true,
	},
	 model: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	 color: {
		type: String,
	},
	createdAt: { type: Date, default: Date.now }
});

//create model
const Product = model("Product", productSchema);


//export model
module.exports = Product;
