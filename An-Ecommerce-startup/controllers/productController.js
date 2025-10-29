const { sendErrorResponse } = require("../utils/response");

const getAllProduct = (req, res) => {
  // res.send("Fetching all products");
  sendErrorResponse(res, "Fetching all products");
};

const addANewProduct = (req, res) => {
  // res.send("Adding a new product");
  sendErrorResponse(res, "Adding a new product");
};

const getASingleProduct = (req, res) => {
  // res.send(`Fetching product with ID: ${req.params.id}`);
  sendErrorResponse(res, `Fetching product with ID: ${req.params.id}`);
};

module.exports = {
  getAllProduct,
  getASingleProduct,
  addANewProduct,
};
