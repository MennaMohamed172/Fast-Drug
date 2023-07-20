const express = require('express')
const donationController = require('../controllers/donationController')
const auth = require('../middleware/auth')
const checkRole = require("../middleware/role.js")
const { USER_ROLE } = require('../constants/roles')
const router = express.Router()

router.post('/donate',auth,checkRole(USER_ROLE),donationController.addNewDonataion)
router.get('/donate', auth,donationController.getAllElement)
router.get('/donate/:id', auth,donationController.getElmenetById)
router.put('/donate/:id', auth,donationController.updateById)
router.delete('/donate/:id',auth ,donationController.deletById)

module.exports = router
