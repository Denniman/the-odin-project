const container = document.querySelector('.books__container')
const form = document.querySelector('.modal--form')
const modal = document.querySelector('.modal')


const myBookLibrary = []


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary(e)
    container.innerHTML = renderBooks()
    modal.style.display = 'none'
    form.reset()
})

function addBookToLibrary({target}) {
    
    const book = {
        title: target.bookTitle.value,
        author: target.bookAuthor.value,
        pages: target.bookNumber.value
    }
    
 myBookLibrary.unshift(book);
}

function renderBooks() {
    return myBookLibrary.map(({title, author, pages}) => {
     return `<article class="card">
          <h3>Book Title: ${title}</h3>
          <h3>Book Author: ${author}</h3>
          <h3>Book Pages: ${pages}</h3>
      </article>`
    })
  }
  

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none'
})

document.querySelector('#addBook').addEventListener('click', () => {
    modal.style.display = 'block'
})

