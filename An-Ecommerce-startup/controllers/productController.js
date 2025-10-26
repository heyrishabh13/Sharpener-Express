const getAllProduct = (req, res) => {
  res.send("Fetching all products");
};

const addANewProduct = (req, res) => {
  res.send("Adding a new product");
};

const getASingleProduct = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};

module.exports = {
  getAllProduct,
  getASingleProduct,
  addANewProduct,
};
