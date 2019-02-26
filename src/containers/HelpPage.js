import React, {Component} from "react";

class HelpPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: "helpPage",
    };
    // this.handlePlayClick = this.props.handlePlayClick.bind(this);
    // this.handleHelpClick = this.handleHelpClick.bind(this);
  };

  render (){
    return (
      <div>
        <div className="help-text">
            <h1>HOW TO PLAY</h1>
            <p>Each player is dealt 5 cards and these are displayed in 2 separate rows.</p>
            <p>The first player then guesses whether their next card will be HIGHER or LOWER than the current card</p>
            <p>ACE is the highest card and TWO is the lowest.</p>
            <p>At the start of each player's turn, they have the option to replace their first card<br/>
            This will give them a new random card from the remaining deck</p>
            With each guess of HIGHER/LOWER, the player advances to the next card etc...<br/><br/>
            <h1>HOW TO WIN</h1>
            <p>The first player in turn who reaches the end of their 5 cards is the WINNER.</p>
            <p>If a player guesses wrong, they would retreat back to the card where they started.
            Play is then passed across to the other player</p>
            <h1>FREEZE</h1>
            <p>After any correct guess, a player can "freeze", which would protect their cards.
            A marker would be placed by beside the frozen card, which meant that any subsequent wrong guesses
            on their cards would put them back no further than where they froze.</p>
            <p>Should the player regain control of the board, they will be allowed to change the frozen card.</p>
        </div>
        
        <div className="play-button">
          <button type="button" onClick={this.props.handleButtonPlayClick} className="splash-play-button">
            Play!
          </button>
        </div>

        <div className="back-button">
          <button type="button" onClick={this.props.handleButtonBackClick} className="splash-back-button">
            Go back
          </button>
        </div>
      </div>
    )
  };

};


export default HelpPage;
