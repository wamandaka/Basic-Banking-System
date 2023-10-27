const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const morgan = require("morgan");

router.use(morgan("dev"));
router.use("/api/v1/user", userRoute);
module.exports = router;