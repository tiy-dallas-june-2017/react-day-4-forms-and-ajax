import React from 'react';
import './Steaks.css';

class Steaks extends React.Component {

  constructor() {
    super();

    this.state = {
      levels: []
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }


  componentDidMount() {
    console.log('componentDidMount');

    fetch('http://tiy.ericsowell.com/api/cookingsteaks')
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log(results);
        this.setState({
          levels: results.levels
        });
      });


  }

  render() {
    console.log('render', this.state);

    return (
      <div className="steaks">
        <h3>Steaks</h3>

        <ol>
          {this.state.levels.map((steak, i) => {
            return <li key={i}>
              <h4>{steak.name}</h4>
              <p>{steak.description}</p>
              <img src={steak.imageUrl} alt="steak" />
            </li>
          })}
        </ol>

      </div>
    );
  }

}

export default Steaks;
