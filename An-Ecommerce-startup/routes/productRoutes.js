const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProduct);

router.post("/", productController.addANewProduct);

router.get("/:id", productController.getASingleProduct);

module.exports = router;
