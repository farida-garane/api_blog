
const express=require('express');
const router=express.Router();
const controller=require('../controllers/authController');

 router.post('/inscription',authController.register);
 router.post('/connexion',authController.connexion);

 module.exports=router;2