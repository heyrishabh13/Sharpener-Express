const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Orders list");
});

router.post("/", (req, res) => {
  res.send("Order Created successfully");
});

module.exports = router;
