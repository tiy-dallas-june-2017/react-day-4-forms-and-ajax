import React, { Component } from 'react';
import './App.css';
import TypingMirror from './TypingMirror.js';
import BookMirror from './BookMirror.js';
import Steaks from './Steaks.js';
import Dragonlance from './Dragonlance.js';
import GithubUsers from './GithubUsers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypingMirror />
        <BookMirror />
        <Steaks />
        <Dragonlance />
        <GithubUsers />
      </div>
    );
  }
}

export default App;
