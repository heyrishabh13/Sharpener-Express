const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId", cartController.getCartForASpecificUser);

router.post("/:userId", cartController.addProductToCartWithSpecificUserId);

module.exports = router;
