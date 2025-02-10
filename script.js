const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const titlePara = document.querySelector('#title-para');
const authorPara = document.querySelector('#author-para');
const btn = document.querySelector('#btn');


const title = bookTitle;
const author = bookAuthor;

const library = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    function Books(title, author) {
        this.title = title,
        this.author = author
    }
    
    const book = new Books(title.value, author.value);

    titlePara.textContent = `${book.title}`;
    authorPara.textContent = `${book.author}`;

    bookTitle.value = "";
    bookAuthor.value = "";

    library.push(book);
    console.log(library);
})



