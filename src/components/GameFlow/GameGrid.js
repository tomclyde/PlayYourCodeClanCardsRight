import React from "react";
import GameRow from './GameRow';

const GameGrid = (props) => {
  return (
    <div className="game-grid">
      <GameRow />
      <GameRow />
    </div>
  )
};

export default GameGrid;
