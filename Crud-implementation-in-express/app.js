const express = require("express");
const studentRoutes = require("./routes/students.js");
const courseRoutes = require("./routes/course.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.use((req, res) => {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
