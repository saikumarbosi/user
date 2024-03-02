const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/create', userController.createUser)
router.get('/getUsers', userController.getUser)
router.put('/updateUser/:id', userController.updateUser)
router.delete('/deleteUser/:id', userController.deleteUser)
router.get('/user/:id', userController.singleUser);

module.exports = router