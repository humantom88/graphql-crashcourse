import React from 'react'
import { graphql } from 'react-apollo'
import BookDetails from './BookDetails'
import { getBooksQuery } from '../queries/queries'

class BookList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  displayBooks() {
    let data = this.props.data
    if (data.loading) {
      return <div>Loading books...</div>
    } else {
      return data.books.map(book => (
        <li key={book.id} onClick={this.handleClick(book.id)}>{book.name}</li>
      ))
    }
  }

  handleClick(id) {
    return (ev) => {
      this.setState({
        selected: id
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
