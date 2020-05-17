// dummy data IS NOT USED IN PROJECT
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' }
]

const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
]

const getBooksAuthor = (parent, args) => {
    return _.find(authors, { id: parent.authorId })
}
const getBooksByAuthor = (parent, args) => {
    return _.filter(books, { authorId: parent.id })
}
const getBookById = (parent, args) => {
    return _.find(books, { id: args.id })
}
const getAuthorById = (parent, args) => {
    return _.find(authors, { id: args.id })
}
const getBooks = (parent, args) => {
    return books
}
const getAuthors = (parent, args) => {
    return authors
}

module.exports = {
    getBooksAuthor,
    getBooksByAuthor,
    getBookById,
    getAuthorById,
    getBooks,
    getAuthors
}