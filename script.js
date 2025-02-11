const library = [];

function Book(title, author, pages, year){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
}

function addBookToLibrary(title, author, pages, year){
    const newBook = new Book(title, author, pages, year);
    library.push(newBook);
}

function displayBook() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    library.forEach((book, index) => {
        const createBook = document.createElement('div');
        createBook.classList.add('books')
        createBook.innerHTML = `
        <h2>${book.title}</h2
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Published on: ${book.year}</p>
        <button class="delete-btn" data-index="${index}">delete</button>
        `
        bookContainer.appendChild(createBook);
    })

    
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const year = document.getElementById('year');

    addBookToLibrary(title.value, author.value, pages.value, year.value);
    form.reset();
    displayBook();

})

document.getElementById('book-container').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        library.splice(index, 1);
        displayBook();
    }
})