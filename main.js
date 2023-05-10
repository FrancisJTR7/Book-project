function book(name, pages, read) {
  this.name = name;
  this.page = page;
  this.read = read;
}

const book1 = new book('Harry Potter', '256', 'not read');

console.log(book1());
