let myLibrary = [];

function addBook(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const page = parseInt(document.getElementById('page').value);
  const book = {
    name: name,
    page: page,
  };

  myLibrary.push(book);

  console.log(book);
  console.log(myLibrary);
  closeModal();
}

function openModal() {
  const modal = document.getElementById('form-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('form-modal');
  modal.style.display = 'none';
}

const add = document.getElementById('add');
add.addEventListener('click', openModal);

const form = document.getElementById('user-input-form');
form.addEventListener('submit', addBook);
