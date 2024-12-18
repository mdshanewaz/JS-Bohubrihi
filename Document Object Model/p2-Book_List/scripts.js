// Get the UI element
let form = document.querySelector('#book_form');
let booklist = document.querySelector('#book_list');

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
    static addTobookList(book) {
        let list = document.querySelector('#book_list');
        let row = document.createElement('tr');

        row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> <a class='delete' href="#">X</a></td>`;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book_form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    
    static deleteFromBook(target) {
        if(target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert('Book deleted!', 'success');
        }
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static displayBooks() {
        let books = Store.getBooks();
        books.forEach(book => {
            UI.addTobookList(book);
        });
    }

    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}
// Add event listener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Define Functions
function newBook(e) {
    let title = document.querySelector('#title').value,
       author = document.querySelector('#author').value,
         isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all fields!", "error");            
    }
    else {
        let book = new Book(title, author, isbn);
    
        UI.addTobookList(book);
        UI.clearFields();

        UI.showAlert("Book added!", "success");
        Store.addBook(book);   
    }

    e.preventDefault();
}

// Delete book
function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}