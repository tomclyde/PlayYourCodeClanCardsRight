import React, {Component} from 'react';
import "./withSplashPage.css";
import GameBox from '../containers/GameBox'

class WithSplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleSplashClick = this.handleSplashClick.bind(this);
  }

  handleSplashClick(){
      this.setState({loading: false});
  };

  render() {
    // while checking user session, show "loading" message
    if (this.state.loading) {

    // otherwise, show the desired route
    return (
      <div className="splash-page">
        <button type="button" onClick={this.handleSplashClick} className="splash-button">
          Play!
        </button>
      </div>
      );
    } else { return <GameBox />};
  }
}

export default WithSplashPage;
