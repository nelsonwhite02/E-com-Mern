const express = require("express");

const router = express.Router();

const {getAllProducts,
     getProductsById,
    } = require("../controller/productController");

// @desc get all products from DB
// @route GET /api/products
// @access Public

router.get("/", getAllProducts)

// @desc GET a product by id from DB
// @route GET /api/products/:id
// @access Public

router.get("/:id", getProductsById)

module.exports = router;