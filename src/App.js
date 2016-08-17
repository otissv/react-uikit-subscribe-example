import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subscribe from './components/subscribe';

class App extends Component {
  onHandleChange (e) {
    console.log(arguments);
  }

  onHandleSubmit (e) {
    console.log('clicked');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo" alt="logo"
          />
          <h2>Welcome to React</h2>
        </div>
        <Subscribe
          onSubmit={this.onHandleSubmit}
          onChange={this.onHandleChange}
          />
      </div>
    );
  }
}

export default App;
