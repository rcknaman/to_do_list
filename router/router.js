const express=require('express');
const router=express.Router();

const ctrl = require('../controller/controller');

router.get('/',ctrl.home);
module.exports=router;