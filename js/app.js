const container = document.querySelector('.books__container')
const bookTitle = document.querySelector('#bookTitle') 
const form = document.querySelector('.modal--form')
const modal = document.querySelector('.modal')

const myBoolLibrary = []

function render(array) {
    return array.forEach(item => {
        container.innerHTML = ''
        const newBook = document.createElement('p')
        newBook.textContent = item.book
        container.appendChild(newBook)
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary(bookTitle.value)
    render(myBoolLibrary)
})

function addBookToLibrary(input) {
    return myBoolLibrary.push({
        book: input
    });
}

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none'
})

document.querySelector('#addBook').addEventListener('click', () => {
    modal.style.display = 'block'
})
