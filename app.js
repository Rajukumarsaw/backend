const express=require('express');
const app=express();
const {urlencoded}=require('body-parser');
require('dotenv').config();
const cors=require('cors');
//middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
const userRoute=require('./routes/userRoutes');
const productRoute=require('./routes/productRoutes');
const connectToDb=require('./db');

connectToDb();

const paymentRoute=require('./routes/paymentRoutes');
app.use('/api/user', userRoute);
app.use('/api/products', productRoute);
app.use('/api/payment', paymentRoute);
module.exports=app;