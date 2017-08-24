import React from 'react';
import './BookMirror.css';

class BookMirror extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      author: ''
    };
  }

  handleTitleChange(evt) {
    this.setState({
      title: evt.target.value
    })
  }

  handleAuthorChange(evt) {
    this.setState({
      author: evt.target.value
    });
  }

  render() {
    return (
      <div className="book-mirror">
        <div className="book-form">
          <input value={this.state.title} placeholder="title" onChange={(evt) => this.handleTitleChange(evt)} />
          <input value={this.state.author} placeholder="author" onChange={(evt) => this.handleAuthorChange(evt)} />
        </div>

        <div className="display-info">
          <p>Title: {this.state.title}</p>
          <p>Author: {this.state.author}</p>
        </div>
      </div>
    )
  }
}

export default BookMirror;
