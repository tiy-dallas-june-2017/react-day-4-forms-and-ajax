import React from 'react';

class GithubUsers extends React.Component {

  constructor() {
    super();

    this.state = {
      query: '',
      items: []
    }
  }

  handleQueryChange(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  handleClick() {

    fetch(`https://api.github.com/search/users?q=${this.state.query}`)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log('results?', results);
        this.setState({
          items: results.items
        });
      });
  }

  render() {
    return (
      <div className="github-users">

        <input value={this.state.query} onChange={(evt) => this.handleQueryChange(evt)} />
        <button onClick={() => this.handleClick()}>Search</button>

        <h2>Users</h2>

        <ol>
          {this.state.items.map((item) => {
            return <li key={item.id}>{item.login}</li>
          })}
        </ol>

      </div>
    );
  }

}

export default GithubUsers;
