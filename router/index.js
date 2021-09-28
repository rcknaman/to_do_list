const express=require('express');
const router=express.Router();
console.log('router is setteled');
const ctrl = require('../controller/controller');

router.get('/',ctrl.home);
module.exports=router;