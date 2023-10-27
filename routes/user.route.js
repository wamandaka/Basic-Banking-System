const express = require("express");
const router = express.Router();
const { test, create, getAll, getById, updateById, deleteById } = require('../controller/user.constroller');
const { PrintSuccess, CheckPostReq } = require("../middleware/middleware");

// router.use(PrintSuccess)
// router.get("/", test);
router.post("/", CheckPostReq, create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);
module.exports = router;