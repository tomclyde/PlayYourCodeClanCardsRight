import React, {Component} from 'react';
import "./withSplashPage.css";
import GameBox from '../containers/GameBox'
import HelpPage from '../containers/HelpPage'

class WithSplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "splashPage",
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  };

  handlePlayClick(){
      this.setState({status: "playGame"});
  };

  handleHelpClick(){
      this.setState({status: "showHelp"});
  };

  handleBackClick(){
    this.setState({status: "splashPage"});
  }

  render() {
    if (this.state.status === "splashPage") {
    return (
      <div className="splash-buttons">

        <div>
          <button type="button" onClick={this.handlePlayClick}>
            Play!
          </button>
        </div>

        <div>
          <button type="button" onClick={this.handleHelpClick}>
            How to play???
          </button>
        </div>

      </div>
      );
    } else if (this.state.status === "playGame") {
      return <GameBox />
    } else if (this.state.status === "showHelp") {
      return <HelpPage handleButtonPlayClick = {this.handlePlayClick} handleButtonBackClick = {this.handleBackClick}/>
    }
  }
}

export default WithSplashPage;
