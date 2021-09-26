const express=require('express');
const ctrl = require('../controller/controller');
const router=express.Router();
console.log('router is setteled');

router.get('/',ctrl.home);
console.log('router');
module.exports=router;