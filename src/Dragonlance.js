import React from 'react';

import './Dragonlance.css';

class Dragonlance extends React.Component {

  constructor() {
    super();

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('http://tiy.ericsowell.com/api/dragonlance')
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({
          characters: results.characters
        });
      });
  }

  render() {
    return (
      <div className="dragonlance">

        {this.state.characters.map((character) => {
          return <div className="character" key={character.name}>
            <h4>{character.name} - {character.race}</h4>
            <p>{character.description}</p>
          </div>
        })}


      </div>
    );
  }

}

export default Dragonlance;
