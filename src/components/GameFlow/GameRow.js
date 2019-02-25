import React from "react";
import GameCard from './GameCard';

const GameRow = (props) => {
  return (
    <div className="game-row">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  )
};

export default GameRow;
