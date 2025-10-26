const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  let str = "Welcome: ";
  for (let i = 0; i < students.length - 1; i++) {
    if (i !== students.length - 1) {
      str += students[i].name + ",";
    }
  }
  str += students[students.length - 1].name;
  res.send(str);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let findId = false;
  let username;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      username = students[i].name;
      findId = true;
      break;
    }
  }
  if (findId) {
    res.send(`Student: ${username}`);
  } else {
    res.send("Student not found");
  }
});

module.exports = router;
