const express = require('express');
const router = express.Router();
const controller = require('./controller');

// ✅ Correct routing
router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.put('/updateuser', controller.updateUser);
router.delete('/deleteuser/:id', controller.deleteUser);

module.exports = router;
