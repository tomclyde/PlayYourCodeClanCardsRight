import React, { Component } from 'react';
import './App.css';
import GameBox from './containers/GameBox';
import PlayerForm from './components/PlayerFlow/PlayerForm.js';
import WithSplashPage from './components/withSplashPage.js';

class App extends Component {
  render() {
    return (
      <PlayerForm />
    );
  }
}

export default App;
