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
      currentPlayer: 0,
      newCard: []
    };
    this.allocateCards = this.allocateCards.bind(this);
    this.allocateNewCard = this.allocateNewCard.bind(this);
    this.drawCards = this.drawCards.bind(this);
    this.drawNewCard  = this.drawNewCard.bind(this);
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleFreeze = this.handleFreeze.bind(this);
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
      obj[player]["newCardOption"] = true;
    });

    request.send();
  };

  drawNewCard(card, activePlayer) {
    console.log("In drawNewCard");
    const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=1`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);

      // if (!newCard.cards) return null;
      // currentPlayer.cards["0"] = newCard.cards["0"];
      // currentPlayer.newCardOption = false;

      const cardobj = this.state;
      cardobj[card] = data;

      if(this.state.currentPlayer === 0){
        cardobj.player1cards = this.state.player1cards;
        cardobj.player1cards.cards[0] = data.cards[0];
      }else{
        cardobj.player2cards = this.state.player2cards;
        cardobj.player2cards.cards[0] = data.cards[0];
      }


      this.setState(cardobj);
      console.log("1 card data", this.state.newCard);
    });
    request.send();
  };

  // Add drawNewCard function perhaps similar to above ending the url in '1'.
  // To be accessed from GameUI.js

  allocateCards() {
    this.drawCards("player1cards");
    this.drawCards("player2cards");
  };

  allocateNewCard(currentPlayer) {
    this.drawNewCard("newCard", currentPlayer);
  }

  handlePlayerChange(){
    if(this.state.currentPlayer === 0){
      this.setState({currentPlayer: 1 })
      // console.log("after setState:",this.state.currentPlayer);
    }
    else {
    this.setState({currentPlayer: 0 })
    }
    // console.log("currentPlayer:", this.state.currentPlayer);
  };

  handleFreeze(){
    console.log("handling the FREEZE");
    //THIS IS WHERE THE SET STATE NEEDS TO HAPPEN BUT THE CARD DETAILS ARE NOT DEFINED IN STATE
    // console.log(this.state.currentPlayer.cards);
  };

  render(){
    return (
      <div className="game-box">
        <h1 align="center">PLAY YOUR CARDS RIGHT</h1>
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} />
        <div className="game-ui">
          <GameUI players={[this.state.player1cards, this.state.player2cards]}
           activePlayer={this.state.currentPlayer}
           handlePlayerChange={this.handlePlayerChange}
           allocateNewCard={this.allocateNewCard}
           newCard={this.state.newCard}
           handleFreeze={this.handleFreeze}/>
        </div>
      </div>
    );
  };

};

export default GameBox;
