import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href='https://outloud-react-civilizador.c9users.io:5000/auth/facebook'> Sign in with FB </a>
          <a href=''> Sign in with LN </a>
        </header>
      </div>
    );
  }
}

export default App;