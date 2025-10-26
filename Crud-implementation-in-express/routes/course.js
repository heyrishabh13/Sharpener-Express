const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  let str = "Courses: ";
  for (let i = 0; i < courses.length - 1; i++) {
    str += courses[i].name + ",";
  }
  str += courses[courses.length - 1].name;
  res.send(str);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let findCourse = false;
  let courseName, courseDescription;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == id) {
      findCourse = true;
      courseName = courses[i].name;
      courseDescription = courses[i].description;
      break;
    }
  }
  if (findCourse) {
    res.send(`Course: ${courseName}, Description: ${courseDescription}`);
  } else {
    res.send(`Course not found`);
  }
});

module.exports = router;
