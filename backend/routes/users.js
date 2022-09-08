const express = require('express')
const usersController = require('../controllers/users')

const router = express.Router()

router.get('/', usersController.getUsers)
router.get('/:uId', usersController.getUserById)
router.post('/', usersController.createNewUser)
router.put('/:uId', usersController.updateUser)
router.delete('/:uId', usersController.deleteUser)

module.exports = router