function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    // creating a method on a constructor function is not an efficient way of managing memory
    // this.info = function() {
    //     const isRead = this.read ? 'read' : 'not read yet'
    //     return `${this.title} by ${this.author}, ${this.pages}, ${isRead}`
    // }
}

Book.prototype.info = function() {
    const isRead = this.read ? 'read' : 'not read yet'
        return `${this.title} by ${this.author}, ${this.pages}, ${isRead}`
}

const book1 = new Book('The West', 'Walter Roodny', 359, false)
book1.read = true

// console.log(book1.info())


function Student() {

}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EightGrader(name) {
    this.name = name
    this.age = 8
}

EightGrader.prototype = Object.create(Student.prototype)

const carl = new EightGrader('Carl')
// carl.sayName()
// console.log(carl.age)

// const numbers = [10, 9, 2, 4, 1, 5, 7, 3, 8, 6]

// numbers.sort((a, b) => {
//     return a - b
// })

// console.log(numbers)

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = [...new Set(ages)]
console.log(uniqueAges)
