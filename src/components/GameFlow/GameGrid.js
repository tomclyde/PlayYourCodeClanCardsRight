import React from "react";
// import GameBox from "../../containers/GameBox";
import GameCard from "./GameCard";
import GameUI from "./GameUI";
import './CSS/GameGrid.css';

const GameGrid = (props) => {
  console.log(props);
  if (!props.player1.cards) return null;

  const p1cardNodes = props.player1.cards.map(card => {
      return(
        <GameCard key={props.player1.cards.indexOf(card)} card={card}>
        </GameCard>
      );
    });

  if (!props.player2.cards) return null;

  const p2cardNodes = props.player2.cards.map(card => {
      return(
        <GameCard key={props.player2.cards.indexOf(card)} card={card}>
        </GameCard>
      );
    });


  return (
    <div>
      <div className="grid-container">
          {p1cardNodes}
          {p2cardNodes}
      </div>

      <GameUI handinfo={props}/>
    </div>
  );
}

export default GameGrid;
