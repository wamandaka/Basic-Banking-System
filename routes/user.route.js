const express = require("express");
const router = express.Router();
const { test, create, getAll, getById, update } = require('../controller/user.constroller');
const { PrintSuccess, CheckPostReq } = require("../middleware/middleware");

// router.use(PrintSuccess)
// router.get("/", test);
router.post("/", CheckPostReq, create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
module.exports = router;