const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use("/product", productRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});
