import React, { Component } from 'react';
import logo from './fidget1.png';
import Table from "./Table";
import './App.css';
import axios from 'axios';

const root = 'http://gf-fidgetspinner.herokuapp.com'

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: []
    };
    axios.get(root + '/api/best_times')
      .then((res) => {
        console.log("User data: ",res);
        this.setState({
          usersData: res.data.page.content
        })

      })
  }

  mainRender() {
    return (
      <div className="buttons">
        <button onClick={this.showBestTimes} className="timesButton">Best times</button>
        <button onClick={this.showBestNoSpins} className="spinsButton">Best spins</button>
        <button onClick={this.showBestMaxRpms} className="rpmsButton">Best RPMs</button>
      </div>
    )
  }

  showUsers() {
    let cols = [
        { key: 'nickName', label: 'User name' },
        { key: 'spinTime', label: 'Spin time' },
        { key: 'numberOfSpins', label: 'No of spins' },
        { key: 'maxRpm', label: 'Max RPM' }
    ];
    console.log('Users data: ', this.state.usersData);
    return <div>
      <Table cols={cols} data={this.state.usersData}/>
    </div>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fidget spinner leaderboard</h2>
        </div>
        <p className="App-intro">
          <span>Play & <br/> challenge others to spin!</span>
        </p>
        <section className="mainTable">
          {this.mainRender()}
          {this.showUsers()}
        </section>
      </div>
    );
  }
}




export default App;
