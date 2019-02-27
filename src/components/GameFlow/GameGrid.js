import React from "react";
// import GameBox from "../../containers/GameBox";
import GameCard from "./GameCard";
// import GameUI from "./GameUI";
import './CSS/GameGrid.css';

const GameGrid = (props) => {
  // console.log(props);
  if (!props.player1.cards) return null;

  const p1cardNodes = props.player1.cards.map(card => {
    // console.log("cardvalue", card.value);
    // console.log("cardimage", card.image);
    return(
      <GameCard key={props.player1.cards.indexOf(card)} value={card.value}
      image={card.image}>
      </GameCard>
    );
  });

  if (!props.player2.cards) return null;

  const p2cardNodes = props.player2.cards.map(card => {
    return(
      <GameCard key={props.player2.cards.indexOf(card)} value={card.value}
      image={card.image} flipped={card.flipped}>
      </GameCard>
    );
  });


  return (
    <div className="game-grid">
      <div className="p1-card-row">
        {p1cardNodes}
      </div>
      <div className="p2-card-row">
        {p2cardNodes}
      </div>
    </div>
  );
}

export default GameGrid;
