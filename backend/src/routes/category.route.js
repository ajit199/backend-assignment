const { Router } = require("express");
const getCategories = require("../controllers/category.controller.js");
const verifyJWT = require("../middlewares/auth.middleware.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: get all categories
 */

/**
 * @swagger
 * /api/v1/data/categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve all categories data with filtering options
 *     tags: [Data]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter the data
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Number of items to skip
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of items to return
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: [{'data1'}, {'data2'}, {'data3'}]
 *                 count:
 *                   type: integer
 *                   example: 3
 *       '404':
 *         description: No data found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No data found
 */

router.route("/get-categories").get(verifyJWT, getCategories);

module.exports = router;
