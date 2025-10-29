const sendErrorResponse = (res, mess) => {
  res.send(mess);
};

module.exports = {
  sendErrorResponse,
};
