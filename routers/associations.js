const express = require('express')
const AssociationController = require('../controllers/associationController')
const auth = require('../middleware/auth')
const checkRole = require('../middleware/role')
const { ASSOCIATION_ROLE } = require('../constants/roles')

const router = express.Router()

router.get('/associations',auth, AssociationController.getAllAssociations)
router.get('/associations/donations',auth,checkRole(ASSOCIATION_ROLE),AssociationController.getDonationForMyAssociation)


module.exports = router
