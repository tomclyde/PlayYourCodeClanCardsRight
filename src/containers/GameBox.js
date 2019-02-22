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

  drawCards(player) {
    const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=5`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log("data:", data);
      const obj = {};
      // could change to fetch
      obj[player] = data;
      this.setState(obj);
    });

    request.send();
  };

  allocateCards() {
    const p1Drawn = this.drawCards("player1cards");
    const p2Drawn = this.drawCards("player2cards");
  }

  render(){
    return (
      <div>
<<<<<<< HEAD
        <h2>Play Your Cards Right 2</h2>
        <GameGrid />
=======
        <h2>Play Your Cards Right</h2>
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} />
>>>>>>> 27c54309a5c118146c4af4bb5b4345b420e1c0d8
      </div>
    );
  }

};

export default GameBox;
