import React, { Component } from 'react';
import './App.css';
import GameBox from './containers/GameBox';
import WithSplashPage from './components/withSplashPage.js';

class App extends Component {
  render() {
    return (
      <WithSplashPage />
    );
  }
}

export default App;
