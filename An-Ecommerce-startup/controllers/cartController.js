const { sendErrorResponse } = require("../utils/response");

const getCartForASpecificUser = (req, res) => {
  // res.send(`Fetching cart for user with ID: ${req.params.userId}`);
  sendErrorResponse(
    res,
    `Fetching cart for user with ID: ${req.params.userId}`
  );
};

const addProductToCartWithSpecificUserId = (req, res) => {
  sendErrorResponse(
    res,
    `Adding product to cart for user with ID: ${req.params.userId}`
  );
};

module.exports = {
  getCartForASpecificUser,
  addProductToCartWithSpecificUserId,
};
