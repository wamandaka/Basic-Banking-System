const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const morgan = require("morgan");

router.use(morgan("dev"));
router.use('/user', userRoute);
module.exports = router;