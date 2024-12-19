const getTheTitles = function(books) {
  return books.map(function(book) {
    return book.title;
  });
};
//with the arrow function:
//return books.map(book => book.title);


// Do not edit below this line
module.exports = getTheTitles;
