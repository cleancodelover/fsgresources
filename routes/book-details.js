var express = require("express");
var router = express.Router();
const books = require("../data/books.json");

/* GET home page. */
router.get("/book-details/:title?", function (req, res, next) {
  const book = books.find(
    (item) =>
      item.book_title.toLocaleLowerCase() ==
      req.params.title.toLocaleLowerCase()
  );
  console.log("Book title :>>>>>>>>>>>>>>", book);
  res.render("book-details", { title: "Book Details", book });
});

module.exports = router;
