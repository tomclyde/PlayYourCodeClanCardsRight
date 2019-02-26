import React, { Component } from 'react';
import './App.css';
import GameBox from './containers/GameBox';
import withSplashPage from './components/withSplashPage.js';

class App extends Component {
  render() {
    return (
      <GameBox />
    );
  }
}

export default withSplashPage(App);
