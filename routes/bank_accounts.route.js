const express = require("express");
const router = express.Router();
const {create, getAll, getById, updateById, deleteById} = require("../controller/bank_accounts.controller");

router.post("/", create);
// router.get("/", getAll);

/**
 * @swagger
 * /api/v1/accounts:
 *   get:
 *     tags:
 *     - "Bank Accounts"
 *     summary: example to get accounts
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get('/', getAll)

/**
 * @swagger
 * /api/v1/accounts/{id}:
 *   get:
 *     tags:
 *     - "Bank Accounts"
 *     summary: Get one account
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

router.get('/:id', getById)
router.put("/:id", updateById);
router.delete("/:id", deleteById);
module.exports = router;
