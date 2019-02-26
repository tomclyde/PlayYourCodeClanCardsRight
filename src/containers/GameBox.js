import React, {Component} from "react";
import GameGrid from "../components/GameFlow/GameGrid";
import GameUI from "../components/GameFlow/GameUI";

class GameBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: [],
      player1cards: [],
      player2cards: [],
      currentPlayer: 0
    };
    this.allocateCards = this.allocateCards.bind(this);
    this.drawCards = this.drawCards.bind(this);
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
  }

  componentDidMount() {
    const url = 'https://deckofcardsapi.com/api/deck/e60tw40zuhx3/shuffle/';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({deck: data })
    });
    this.allocateCards();
    request.send();
  };

  drawCards(player) {
    const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=5`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const obj = {};
      // could change to fetch
      obj[player] = data;
      this.setState(obj);
      obj[player]["cardPosition"] = 0;
    });

    request.send();
  };

  // Add drawNewCard function perhaps similar to above ending the url in '1'.
  // To be accessed from GameUI.js

  allocateCards() {
    const p1Drawn = this.drawCards("player1cards");
    const p2Drawn = this.drawCards("player2cards");
  };

  handlePlayerChange(){
    console.log("changing in GameBox");
    if(this.state.currentPlayer === 0){
      this.setState({currentPlayer: 1 })
      // console.log("after setState:",this.state.currentPlayer);
    }
    else {
    this.setState({currentPlayer: 0 })
    }
    // console.log("currentPlayer:", this.state.currentPlayer);
  }

  render(){
    return (
      <div className="game-box">
        <h1 align="center">PLAY YOUR CARDS RIGHT</h1>
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} />
        <div className="game-ui">
          <GameUI players={[this.state.player1cards, this.state.player2cards]} activePlayer={this.state.currentPlayer} handlePlayerChange={this.handlePlayerChange}/>
        </div>
      </div>
    );
  };

};

export default GameBox;
