const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const userRoute = require("./user.route");
const bank_accountRoute = require("./bank_accounts.route");

router.use(morgan("dev"));
router.use("/api/v1/user", userRoute);
router.use("/api/v1/accounts", bank_accountRoute);
module.exports = router;