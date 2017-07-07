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
      usersData: {
        page: {
          content: []
        },
        links: {}
      },
      spinTimeData: {
        page: {
          content: []
        },
        links: {}
      },
      noSpinsData: {
        page: {
          content: []
        },
        links: {}
      },
      maxRpmsData: {
        page: {
          content: []
        },
        links: {}
      },
      usersVisible: true,
      spinTimeVisible: false,
      noSpinsVisible: false,
      maxRpmsVisible: false,
    };
    axios.get(root + '/api/bests?properties=time&page=0')
      .then((res) => {
        console.log("User data: ",res);
        this.setState({
          usersData: res.data
        })
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    axios.get(root + '/api/bests?properties=spinTime&page=0')
      .then((res) => {
        console.log("BEst spin times: ",res);
        this.setState({
          spinTimeData: res.data
        })
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    axios.get(root + '/api/bests?properties=numberOfSpins&page=0')
      .then((res) => {
        console.log("Best number of spins: ",res);
        this.setState({
          noSpinsData: res.data
        })
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    axios.get(root + '/api/bests?properties=maxRpm&page=0')
      .then((res) => {
        console.log("Best RPMs: ",res);
        this.setState({
          maxRpmsData: res.data
        })
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  buttonRender() {
    return (
      <div className="buttons">
        <button onClick={this.showBestTimes.bind(this)} className="timesButton">Best times</button>
        <button onClick={this.showBestNoSpins.bind(this)} className="spinsButton">Best spins</button>
        <button onClick={this.showBestMaxRpms.bind(this)} className="rpmsButton">Best RPMs</button>
      </div>
    )
  }

  showBestTimes() {
    this.setState({
      usersVisible: false,
      spinTimeVisible: true,
      noSpinsVisible: false,
      maxRpmsVisible: false
    })
  }

  showBestNoSpins() {
    this.setState({
      usersVisible: false,
      spinTimeVisible: false,
      noSpinsVisible: true,
      maxRpmsVisible: false
    })
  }

  showBestMaxRpms() {
    this.setState({
      usersVisible: false,
      spinTimeVisible: false,
      noSpinsVisible: false,
      maxRpmsVisible: true
    })
  }

  showTables() {
    let cols = [
        { key: 'nickName', label: 'User name' },
        { key: 'spinTime', label: 'Spin time' },
        { key: 'numberOfSpins', label: 'No of spins' },
        { key: 'maxRpm', label: 'Max RPM' }
    ];
    let cols1 = [
        { key: 'nickName', label: 'User name' },
        { key: 'spinTime', label: 'Spin time' },
    ];
    let cols2 = [
        { key: 'nickName', label: 'User name' },
        { key: 'numberOfSpins', label: 'No of spins' },
    ];
    let cols3 = [
        { key: 'nickName', label: 'User name' },
        { key: 'maxRpm', label: 'Max RPM' }
    ];
    console.log('Users data: ', this.state.usersData);
    return <div>
      <Table cols={cols} data={this.state.usersData.page.content} display={this.state.usersVisible} prev={this.state.usersData.links.prev} next={this.state.usersData.links.next} set='usersData'/>
      <Table cols={cols1} data={this.state.spinTimeData.page.content} display={this.state.spinTimeVisible} prev={this.state.spinTimeData.links.prev} next={this.state.spinTimeData.links.next} set='spinTimeData'/>
      <Table cols={cols2} data={this.state.noSpinsData.page.content} display={this.state.noSpinsVisible} prev={this.state.noSpinsData.links.prev} next={this.state.noSpinsData.links.next} set='noSpinsData'/>
      <Table cols={cols3} data={this.state.maxRpmsData.page.content} display={this.state.maxRpmsVisible} prev={this.state.maxRpmsData.links.prev} next={this.state.maxRpmsData.links.next} set='maxRpmsData'/>
    </div>
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fidget<br/>spinner<br/>leaderboard</h2>
        </div>
        <p className="App-intro">
          <span>Play & <br/> challenge others to spin!</span>
        </p>
        <section className="mainTable">
          {this.buttonRender()}
          {this.showTables()}
        </section>
        <div className="loginArea">
          <img className="change" src={require("./arrows0.png")} alt=""/>
          <p><span>LOGIN</span> or <span>REGISTER</span></p>
        </div>
      </div>
    );
  }
}




export default App;
