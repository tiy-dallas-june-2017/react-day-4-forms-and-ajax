import React from 'react';
import './TypingMirror.css';

class TypingMirror extends React.Component {

  constructor() {
    super();

    this.state = {
      theTextValue: 'wings'
    }

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(evt) {
    this.setState({
      theTextValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="typing-mirror">

        <div className="form-input">
          <input value={this.state.theTextValue} onChange={this.inputChanged} />
        </div>

        <p>{this.state.theTextValue}</p>

      </div>
    )
  }

}

export default TypingMirror;
