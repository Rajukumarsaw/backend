const express=require('express');
const {userSignUp, userLogin}=require('../controller/controller')
const router=express.Router();
router.post('/login', userLogin );
//router.put('/post', updateUser);
router.post('/signup',userSignUp
);


module.exports=router;