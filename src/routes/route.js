const express = require('express');
const userController = require('../controller/userController.js')
const auth = require('../middleware/auth.js')
const router = express.Router()

router.post("/registerUser", userController.createUser)
router.post("/logIn", userController.logIn)
router.get("/user/:userId",auth.validator,userController.fetchUser)
router.put("/user/:userId", auth.validator, userController.updateUser)
router.delete("/user/:userId", auth.validator, userController.deleteUser)

module.exports = router;