import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/AppNavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
      </div>
    );
  }
}

export default App;
