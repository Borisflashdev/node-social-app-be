const express = require("express");
const router = express.Router();

const { signup, login, getUser } = require("../controllers/users.js");

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", getUser);
module.exports = router;
