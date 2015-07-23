//Simple script to validate the library's methods

var library = require("./library");

library.addShelf("Fantasy");
library.addShelf("Science Fiction");
library.addShelf("Comics");

library.shelves[0].addBook("Margaret Weis and Tracy Hickman", "Dragons of Autumn Twilight");
library.shelves[0].addBook("Terry Brooks", "The Sword of Shannara");
library.shelves[0].addBook("Terry Brooks", "The Elfstones of Shannara");
library.shelves[1].addBook("Orson Scott Card", "Ender's Game");
library.shelves[2].addBook("Bill Watterson", "The Essential Calvin and Hobbes");

library.libraryContent();

library.shelves[0].removeBook(0);
library.removeShelf(1);

library.libraryContent();
