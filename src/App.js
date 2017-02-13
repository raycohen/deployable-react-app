import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          This was deployed using
          {' '}
          <a
            target="_blank"
            href="https://github.com/raycohen/ember-cli-deploy-create-react-app"
          >
          ember-cli-deploy-create-react-app
          </a>
        </p>
        <p className="App-intro">
          View the configuration from the create-react-app project at
          <a
            target="_blank"
            href="https://github.com/raycohen/deployable-react-app"
          >
          raycohen/deployable-react-app
          </a>
        </p>
      </div>
    );
  }
}

export default App;
