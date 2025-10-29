const { sendErrorResponse } = require("../utils/response");

const getAllUsers = (req, res) => {
  sendErrorResponse(res, "Fetching all users");
};

const addNewUser = (req, res) => {
  // res.send("Adding a new user");
  sendErrorResponse(res, "Adding a new user");
};

const getASingleUser = (req, res) => {
  const mess = `Fetching user with ID: ${req.params.id}`;
  sendErrorResponse(res, mess);
};

module.exports = {
  getAllUsers,
  getASingleUser,
  addNewUser,
};
