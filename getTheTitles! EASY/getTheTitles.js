const getTheTitles = function (books) {
  const bookArray = [];

  for (i = 0; i < books.length; i++) {
    bookArray.push(books[i].title);
  }

  return bookArray;
};

module.exports = getTheTitles;
