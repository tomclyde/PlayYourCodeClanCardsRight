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
    this.allocateNewCards = this.allocateNewCards.bind(this);
    this.drawCards = this.drawCards.bind(this);
    this.drawNewCard  = this.drawNewCard.bind(this);
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleButtonBackClick = this.props.handleButtonBackClick.bind(this);


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
      obj[player]["availableFreeze"] = true;
      obj[player]["positionIsFrozen"] = false;
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

      const cardobj = this.state;
      cardobj[card] = data;

      if(this.state.currentPlayer === 0){
        cardobj.player1cards = this.state.player1cards;
        cardobj.player1cards.cards[cardobj.player1cards.cardPosition] = data.cards[0];
      }else{
        cardobj.player2cards = this.state.player2cards;
        cardobj.player2cards.cards[cardobj.player2cards.cardPosition] = data.cards[0];
      }

      this.setState(cardobj);

    });
    request.send();
  };

  // drawNewCards(card, activePlayer) {
  //   console.log("In drawNewCards");
  //   const url = `https://deckofcardsapi.com/api/deck/e60tw40zuhx3/draw/?count=5`;
  //   const request = new XMLHttpRequest();
  //   request.open('GET', url);
  //
  //   request.addEventListener("load", () => {
  //     if (request.status !== 200) return;
  //     const jsonString = request.responseText;
  //     const data = JSON.parse(jsonString);
  //
  //     const cardobj = this.state;
  //     cardobj[card] = data;
  //
  //     if(this.state.currentPlayer === 0){
  //       this.setState({player1cards: []});
  //       cardobj.player1cards = this.state.player1cards;
  //       cardobj.player1cards.cards = data.cards;
  //     }else{
  //       this.setState({player2cards: []});
  //       cardobj.player2cards = this.state.player2cards;
  //       cardobj.player2cards.cards= data.cards;
  //     }
  //
  //     this.setState(cardobj);
  //
  //   });
  //   request.send();
  // };

  allocateCards() {
    this.drawCards("player1cards");
    this.drawCards("player2cards");
  };

  allocateNewCard(currentPlayer) {
    this.drawNewCard("newCard", currentPlayer);
  }

  allocateNewCards(currentPlayer) {
    if (this.state.currentPlayer === 0) {
      this.drawCards("player1cards");
    } else {
      this.drawCards("player2cards");
    }
  };

  handlePlayerChange(){
    if(this.state.currentPlayer === 0){
      this.setState({currentPlayer: 1 })
    }
    else {
    this.setState({currentPlayer: 0 })
    }
    if (this.state.currentPlayer===0){
      var p1ClassRow = document.querySelector(".p1-card-row");
      console.log(p1ClassRow);
          p1ClassRow.classList.add("selected")

      var p2ClassRow = document.querySelector(".p2-card-row");
          p2ClassRow.classList.remove("selected")
      }
    else{
      var p2ClassRow = document.querySelector(".p2-card-row");
          p2ClassRow.classList.add("selected")

      var p1ClassRow = document.querySelector(".p1-card-row");
          p1ClassRow.classList.remove("selected")
      }
  }

  render(){
    return (
      <div className="game-box">
        <h1 align="center">PLAY YOUR CARDS RIGHT</h1>  
        <GameGrid player1={this.state.player1cards} player2={this.state.player2cards} activePlayer={this.state.currentPlayer}/>
        <div className="game-ui">
          <GameUI players={[this.state.player1cards, this.state.player2cards]}
           activePlayer={this.state.currentPlayer}
           handlePlayerChange={this.handlePlayerChange}
           allocateNewCard={this.allocateNewCard}
           newCard={this.state.newCard}
           handleButtonBackClick = {this.handleButtonBackClick}
           allocateNewCards={this.allocateNewCards}/>
        </div>
      </div>
    );
  };

};

export default GameBox;
