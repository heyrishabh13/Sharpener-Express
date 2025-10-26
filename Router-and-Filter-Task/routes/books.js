const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(`Getting books from the library using ${req.method} method`);
  res.send("Here is the list of books!");
});

router.post("/", (req, res) => {
  const { bookTitle, bookAuthor } = req.body;
  console.log(
    `Book with title ${bookTitle} and author ${bookAuthor} has been added.`
  );
  res.send("Book has been added");
});

module.exports = router;
