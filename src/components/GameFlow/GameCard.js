import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => (
  <div className="media-card">
  <div className="card-image">
  {/* <img className="resize" src="images/playing-card-back.png"/>*/}
  <img className="resize" src={props.image} alt="Playing Cards"/>


  </div>
  </div>
);

export default GameCard;
