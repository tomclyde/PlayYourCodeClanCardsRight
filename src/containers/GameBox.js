import React, {Component} from "react";
import GameGrid from "../components/GameFlow/GameGrid";


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

  drawCards() {
    const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=5`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data);
      return data;
    });

    request.send();
    return data;
  };

  allocateCards() {
    const p1Drawn = this.drawCards();
    console.log("p1Drawn:", p1Drawn);
    this.setState({player1cards: p1Drawn})
    const p2Drawn = this.drawCards();
    this.setState({player2cards: p2Drawn})
  }

  render(){
    console.log("this.state:", this.state);
    return (
      <div>
        <h2>Play Your Cards Right</h2>
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} />
      </div>
    );
  }

};

export default GameBox;
