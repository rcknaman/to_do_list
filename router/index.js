const express = require('express');
const router = express.Router();
console.log('router is setteled');
const ctrl = require('../controller/controller');
router.use(express.urlencoded());
router.get('/', ctrl.home);
router.get('/delete',ctrl.deleteItem);
router.post('/todo', ctrl.addToDo);




module.exports = router;