import React, {Component} from "react";
import GameGrid from '../components/GameFlow/GameGrid';
import GameUI from '../components/GameFlow/GameUI';

class GameBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: [],
      player1cards: [],
      player2cards: []
    };
    this.drawCard = this.drawCard.bind(this);
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

    request.send();
  };


  render(){

    return (
      <div className="game-box">
        <h2>Play Your Cards Right</h2>
        <GameGrid />
      </div>
    );
  }

  drawCard(deckid) {
    console.log("DECKID IN DRAWCARD",deckid);
    const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=5`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({card: data })
    });

    request.send();
  };

};

export default GameBox;
