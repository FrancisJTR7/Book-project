let myLibrary = [];

//Function creates new object based on user input
function addBook() {
  // Get user input through a prompt
  const name = prompt('Enter book name:');
  const page = parseInt(prompt('Enter amount of pages in book'));
  // Create a new object with the user input
  const book = {
    name: name,
    page: page,
  };
  // Add the new object to myLibrary array
  myLibrary.push(book);
  // Log the new object and the updated array to the console
  console.log(book);
  console.log(myLibrary);
}

// Add a click event listener to the button
const button = document.getElementById('add');
button.addEventListener('click', addBook);
