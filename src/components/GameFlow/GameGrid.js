import React from "react";
// import GameBox from "../../containers/GameBox";
import GameCard from "./GameCard";
// import GameUI from "./GameUI";
import './CSS/GameGrid.css';

const GameGrid = (props) => {
  if (!props.player1.cards) return null;

  const p1cardNodes = props.player1.cards.map((card,index)=> {
    // console.log("cardvalue", card.value);
    // console.log("cardimage", card.image);
    return(
      <GameCard key={index} value={card.value} index={index}
      image={card.image}>
      </GameCard>
    );
  });

  if (!props.player2.cards) return null;

  const p2cardNodes = props.player2.cards.map((card, index) => {
    return(
      <GameCard key={index} value={card.value}
      image={card.image} flipped={card.flipped} index={index}>
      </GameCard>
    );
  });



  return (
    <div className="game-grid">
      <div className="p1-card-row selected">
        {p1cardNodes}
      </div>
      <div className="p2-card-row">
        {p2cardNodes}
      </div>
    </div>
  );
}

export default GameGrid;
