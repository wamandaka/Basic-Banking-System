const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const bank_accountRoute = require("./bank_accounts.route");
const morgan = require("morgan");

router.use(morgan("dev"));
router.use("/api/v1/user", userRoute);
router.use("/api/v1/accounts", bank_accountRoute);
module.exports = router;