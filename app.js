//class book refers to a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI handles tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'UnderMine',
        author: 'John Doe',
        isbn: '1414'
      },
      {
        title: 'Topplegang',
        author: 'Ripple Waters',
        isbn: '1415'
      }
    ];
    const books = StoredBooks;
    books.forEach(book => UI.addBookToList(book));
  }
  static deleteBook(el) {
    if (el.classList.contains('btn')) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message) {
    const alert = document.querySelector('.alert-msg');
    if (alert != null) {
      document.querySelector('.alert-msg').remove();
    }
    const div = document.createElement('div');
    div.className = 'alert-msg';
    div.appendChild(document.createTextNode(message));
    const form = document.querySelector('body');
    const group = document.querySelector('#books-form');
    form.insertBefore(div, group);
    document.querySelector('.alert-msg').style.color = 'white';
    document.querySelector('.alert-msg').style.textAlign = 'center';
    if (message == 'Please enter all the fields') {
      document.querySelector('.alert-msg').style.backgroundColor = 'red';
    } else {
      document.querySelector('.alert-msg').style.backgroundColor = 'green';
    }
  }
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn">x</a></td>`;
    list.appendChild(row);
  }
}
//display the books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Addition of a book
var form = document.querySelector('#books-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  var message;
  UI.clearFields();
  if (title === '' || author === '' || isbn === '') {
    message = 'Please enter all the fields';
  } else {
    const book = new Book(title, author, isbn);
    console.log(book);
    UI.addBookToList(book);

    message = 'Your Book has been added';
  }
  UI.showAlert(message);
});
//EVENT:Delete using button
const list = document.querySelector('#book-list');
list.addEventListener('click', e => {
  UI.deleteBook(e.target);
});

setInterval(displayTime, 1000)
displayTime();
function displayTime() {
  let tarik = new Date();
  document.querySelector(".ghori").innerHTML = `<h2>Local Standard time</h2>
<h2>${tarik}</h2>
  `}