const express = require("express");
const router = express.Router();
const {create} = require("../controller/bank_accounts.controller");

router.post("/", create);
module.exports = router;
