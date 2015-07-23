var Book = require("./book");

function Shelf(category) {
  this.shelfName = category;
  this.books = [];
}

Shelf.prototype.addBook = function(author, title) {
  this.books.push(new Book(author, title));

  console.log("New book added to your '" + this.shelfName + "' shelf:");
  console.log("'" + title + "' by " + author);
}

Shelf.prototype.removeBook = function(index) {
  var removed = this.books.splice(index, 1);

  console.log("Book removed from your '" + this.shelfName + "' shelf:");
  console.log("'" + removed[0].bookTitle + "' by " + removed[0].authorName);
}

Shelf.prototype.shelfContent = function() {
  console.log(this.shelfName + ":")

  for (var i = 0; i < this.books.length; i++) {
    console.log("'" + this.books[i].bookTitle + "' by " + this.books[i].authorName);
  }
}

module.exports = Shelf;
