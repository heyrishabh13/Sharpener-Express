const { productServiceCalled } = require("../services/productService");

const getAllProducts = (req, res) => {
  productServiceCalled();
  res.send("Fetching all products");
};

module.exports = { getAllProducts };
