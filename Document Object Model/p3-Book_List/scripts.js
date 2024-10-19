// Get the UI element
let form = document.querySelector('#book_form');

// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn; 
    }
}

// UI class
class UI {
    constructor() {

    }

    addTobookList(book) {
        let list = document.querySelector('#book_list');
        let row = document.createElement('tr');

        row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> <a class='delete' href="#">X</a></td>
        `;

        list.appendChild(row);
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Add event listener
form.addEventListener('submit', newBook);

// Define Functions
function newBook(e) {
    let title = document.querySelector('#title').value,
       author = document.querySelector('#author').value,
         isbn = document.querySelector('#isbn').value;

    let book = new Book(title, author, isbn);
    let ui = new UI();

    ui.addTobookList(book);
    ui.clearFields();

    console.log(book);

    e.preventDefault();
}