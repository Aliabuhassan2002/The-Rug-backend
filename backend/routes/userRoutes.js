const express = require("express");
const { getUserInfo } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/user", verifyToken, getUserInfo);

module.exports = router;
