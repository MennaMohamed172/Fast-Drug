const express = require ('express')
const searchController= require('../controllers/searchController')
const checkRole = require('../middleware/role')
const { USER_ROLE } = require('../constants/roles')
const router = express.Router()
const auth = require("../middleware/auth")

router.get ('/products' ,auth, searchController.getAllProduct)
router.get('/products/:key',auth , checkRole(USER_ROLE),searchController.getProductByKey)
router.post ('/products',auth,searchController.postNewProduct)
router.put('/products/:id', auth,searchController.putFindAndUpdate)
router.delete ('/products/:id',auth,searchController.deletProductById)
module.exports = router 