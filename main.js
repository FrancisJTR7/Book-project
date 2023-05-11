let myLibrary = [];

const ul = document.createElement('ul');
document.body.appendChild(ul);

function update() {
  ul.innerHTML = '';
  myLibrary.forEach((object, index) => {
    const li = document.createElement('li');
    const btt = document.createElement('button');
    const rem = document.createElement('button');
    rem.setAttribute('id', 'remove');
    rem.textContent = 'Remove';
    btt.setAttribute('id', 'read');
    btt.textContent = 'Read';
    li.textContent = `Book Name: ${object.name}, Pages: ${object.page}`;
    ul.appendChild(li);
    li.appendChild(btt);
    li.appendChild(rem);
    btt.style.backgroundColor = object.colored ? 'green' : '#262527';
    btt.addEventListener('click', function () {
      object.colored = !object.colored;
      btt.style.backgroundColor = object.colored ? 'green' : '#262527';
    });
    rem.addEventListener('click', function () {
      myLibrary.splice(index, 1);
      update();
    });
  });
}

function addBook(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const page = parseInt(document.getElementById('page').value);

  const book = {
    name: name,
    page: page,
    colored: false,
  };

  myLibrary.push(book);

  console.log(book);
  console.log(myLibrary);

  closeModal();

  document.getElementById('name').value = '';
  document.getElementById('page').value = '';
  update();
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
