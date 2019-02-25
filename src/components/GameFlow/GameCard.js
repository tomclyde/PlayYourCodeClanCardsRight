import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => (
  <div className="media-card">
  <div className="card-image">
  {/* <img className="resize" src="https://pngimage.net/wp-content/uploads/2018/06/playing-card-back-png-1.png"/>
*/}
  <img className="resize" src={props.image} alt="Playing Cards"/>
  </div>
  </div>
);

export default GameCard;
