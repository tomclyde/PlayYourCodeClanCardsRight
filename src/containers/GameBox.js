import React, {Component} from "react";
import GameGrid from "../components/GameFlow/GameGrid";
import GameUI from "../components/GameFlow/GameUI";

class GameBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: [],
      player1cards: [],
      player2cards: []
    };
    this.allocateCards = this.allocateCards.bind(this);
    this.drawCards = this.drawCards.bind(this);
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

  allocateCards() {
    const p1Drawn = this.drawCards("player1cards");
    const p2Drawn = this.drawCards("player2cards");
  }

  render(){
    return (
      <div className="game-box">
        <h2 align="center">Play Your Cards Right</h2>
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} />
        <div className="game-ui">
          <GameUI player1={this.state.player1cards} player2={this.state.player2cards}/>
        </div>
      </div>
    );
  }

};

export default GameBox;
