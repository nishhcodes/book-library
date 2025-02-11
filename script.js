const bookLibrary = [];

function Book(title, author, pages, year){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
}

function addBookToLibrary(title, author, pages, year){
    const newBook = new newBook(title, author, pages, year);
    bookLibrary.push(newBook);
}

function displayBook(){

}

const form = document.querySelector('#form-container');
form.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const year = document.querySelector('#year').value;

    displayBook(title, author, pages, year);
    form.reset();
})