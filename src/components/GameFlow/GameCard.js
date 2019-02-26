import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => (
  <div className="media-card">
<<<<<<< HEAD
    <div className="card-image">
      {/*<img className="resize" src="images/playing-card-back.png"/>*/}
      <img className="resize" src={props.image} alt="Playing Cards"/>
    </div>
=======
  <div className="card-image">
  {/* <img className="resize" src="images/playing-card-back.png"/>*/}
  <img className="resize" src={props.image} alt="Playing Cards"/>


  </div>
>>>>>>> aa62e8350d5160214d97d92110b68bb33908c010
  </div>
);

export default GameCard;
