import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subscribe from './subscribe';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { email: '' };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange (e) {
    this.setState({ email: e.target.value });
  }

  onHandleSubmit (e) {
    alert(this.state.email);
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
