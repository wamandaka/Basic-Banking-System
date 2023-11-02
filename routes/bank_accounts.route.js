const express = require("express");
const router = express.Router();
const {create, getAll, getById} = require("../controller/bank_accounts.controller");

router.post("/", create);
// router.get("/", getAll);

/**
 * @swagger
 * /api/v1/accounts:
 *   get:
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
 *     summary: Get one user
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
module.exports = router;
