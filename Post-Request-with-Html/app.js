const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "product.html"));
});

app.post("/product", (req, res) => {
  console.log({ value: req.body.product });
  res.json({ value: req.body.product });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
