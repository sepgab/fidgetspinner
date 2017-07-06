import React, { Component } from 'react';
import logo from './fidget1.png';
import './App.css';
import axios from 'axios';

const root = 'http://gf-fidgetspinner.herokuapp.com/api/users'

class App extends Component {
  constructor() {
    super();
    axios.get(root)
      .then(function (res) {
        console.log("User data: ",res);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fidget spinner App</h2>
        </div>
        <p className="App-intro">
          Play & challenge others to spin!
        </p>
      </div>
    );
  }
}




export default App;
