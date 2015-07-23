var Shelf = require("./shelf");

var library = {
  shelves: [],

  addShelf: function(category) {
    this.shelves.push(new Shelf(category));

    console.log("New shelf added to your library: '" + category + "'");
  },

  removeShelf: function(index) {
    var removed = this.shelves.splice(index, 1);

    console.log("Shelf removed from your library: '" + removed[0].shelfName + "'");
  },

  libraryContent: function() {
    console.log("Content of your library:")

    for (var i = 0; i < library.shelves.length; i++) {
      library.shelves[i].shelfContent();
    }
  }
}

module.exports = library;
