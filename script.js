const library = [];

function Book(title, author) {  // Changed to singular "Book"
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {  // Renamed for clarity
    const newBook = new Book(title, author);
    library.push(newBook);
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous entries
    
    library.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('book'); // Changed class name
        div.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
        `;
        bookList.appendChild(div);
    });
}

const form = document.querySelector('#bookForm');

form.addEventListener('submit', (e) => {  // Changed to form submit
    e.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    
    if (titleInput.value.trim() && authorInput.value.trim()) {
        addBookToLibrary(titleInput.value, authorInput.value);
        displayBooks();
        form.reset(); // Clear form fields
    } else {
        alert('Please fill in both fields!');
    }
});