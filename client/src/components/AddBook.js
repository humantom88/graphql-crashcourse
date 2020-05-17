import React from 'react';
import _ from 'lodash'
import { graphql } from 'react-apollo'
import { getAuthorsQuery, getBooksQuery } from '../queries/queries'
import { addBookMutation } from '../queries/mutations'

class AddBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    }
    this.handleChangeGenre = this.handleChangeGenre.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSelectAuthor = this.handleSelectAuthor.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery
    if (data.loading) {
      return <option disabled>Loading authors...</option>
    }
    return data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    ))
  }

  handleChangeName(ev) {
    this.setState({ name: ev.target.value })
  }

  handleChangeGenre(ev) {
    this.setState({ genre: ev.target.value })
  }

  handleSelectAuthor(ev) {
    this.setState({ authorId: ev.target.value })
  }

  submitForm(ev) {
    ev.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={this.handleChangeName} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={this.handleChangeGenre} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={this.handleSelectAuthor}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    )
  }
}

export default _.flowRight(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
