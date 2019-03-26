import React, {Component} from 'react';
import WithSplashPage from '../withSplashPage.js';

class PlayerForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: "login",
      player1: null,
      player2: null
    };

  this.handleNameClickInput = this.handleNameClickInput.bind(this);
  this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
  this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
  this.handleSubmitClick = this.handleSubmitClick.bind(this);
}

  handleNameClickInput(event){
    this.setState({player1: event.target.value});
  };

  handlePlayer1Name(event){
    this.setState({player1: event.target.value});
  };

  handlePlayer2Name(event){
    this.setState({player2: event.target.value});
  };

  handleSubmitClick(){
    this.setState({status: "splashPage"});
  }

  render() {
    if (this.state.status === "login" ){
    return(
      <div>
        <h1>enter names</h1>
        <form>
          <label>
            Player 1:
            <input id="player1_name" type="text" name="player1_name" onChange={this.handlePlayer1Name}/>
          </label>
          <label>
            Player 2:
            <input id="player2_name" type="text" name="player2_name" onChange={this.handlePlayer2Name}/>
          </label>
          <input type="button" value="submit" onClick={this.handleSubmitClick}/>
        </form>
      </div>

    )
  } else {
    return(
    <WithSplashPage player1_name = {this.state.player1} player2_name = {this.state.player2}/>)
  }
  }
};

export default PlayerForm;
