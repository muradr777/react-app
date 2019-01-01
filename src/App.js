import React, { Component } from 'react';
import NavBar from './components/navbar';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar/>
            <Main/>
        </React.Fragment>
    );
  }
}

export default App;
