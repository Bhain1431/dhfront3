import React, { Component } from 'react';
import logo from '../public/Pics/IMG_DHlogo.jpg';
import './App.css';
import Footer from './components/Footer.js';
//import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomePage from "./components/home/HomePage";




class App extends Component {

    constructor(props) {
        super(props);
        this.state= {open:false}
    }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" />
            <h2>DH Pottery & Glass</h2>
        </div>
          {this.props.children}
        <p className="App-intro">
          Welcome to DH Pottery & Glass where you can make custom pottery, or just look around enjoy!
        </p>
          <Footer />
      </div>

    );
  }
}

export default App;
