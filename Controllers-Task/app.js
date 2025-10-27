const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});
