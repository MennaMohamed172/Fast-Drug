const express = require("express")
const router = express.Router()
const registerController = require("../controllers/registerController")
const auth = require('../middleware/auth')
const checkRole = require("../middleware/role.js")
const { USER_ROLE, ASSOCIATION_ROLE } = require('../constants/roles')
router.post("/register", async (req, res) => {
  await registerController.addNewUser(req, res)
})

router.get("/register", auth,(req, res) => {
  registerController.getAllUsers(req, res)
})

router.get("/register/:userId", auth,(req, res) => {
  registerController.getUserById(req, res)
})

router.put("/register/:id", auth,checkRole(ASSOCIATION_ROLE,USER_ROLE),async (req, res) => {
  await registerController.updateUserInfoById(req, res)
})

router.delete("/register/:userId", auth,checkRole(ASSOCIATION_ROLE,USER_ROLE),(req, res) => {
  registerController.deleteUserById(req, res)
})

router.post("/login", async (req, res) => {
  await registerController.adduserRegisteralready(req, res)
})

router.patch("/logout/:_id",auth,checkRole(ASSOCIATION_ROLE,USER_ROLE), async (req, res) => {
  await registerController.deleteUser(req, res)
})

module.exports = router
