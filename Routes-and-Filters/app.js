const express = require("express");
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/users");

const app = express();

app.use("/orders", orderRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
