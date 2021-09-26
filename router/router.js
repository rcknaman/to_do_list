const express=require('express');
const router=express.Router();

const ctrl = require('../controller/controller');

router.get('/',ctrl.home);
console.log('router');
module.exports=router;