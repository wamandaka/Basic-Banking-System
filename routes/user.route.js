const express = require("express");
const router = express.Router();
const {
  test,
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../controller/user.constroller");
const { PrintSuccess, CheckPostReq } = require("../middleware/middleware");

// router.use(PrintSuccess)
// router.get("/", test);
// router.post("/", CheckPostReq, create);
// router.get('/', getAll);
// router.get('/:id', getById);
// router.put("/:id", updateById);
router.delete("/:id", deleteById);

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     tags:
 *     - "User"
 *     summary: example to get user
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     tags:
 *     - "User"
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

router.get("/:id", getById);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     tags:
 *     - "User"
 *     summary: example to create user
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                identity_type:
 *                  type: string
 *                identity_number:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/", CheckPostReq, create);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   put:
 *     tags:
 *     - "User"
 *     summary: update one user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                identity_type:
 *                  type: string
 *                identity_number:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.put("/:id", updateById);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     tags:
 *     - "User"
 *     summary: delete one
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */
router.delete("/:id", deleteById);

module.exports = router;
