import React, {Component} from 'react';
import App from '../App';
import "SplashPage.css";

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handeSplashClick = this.handleSplashClick.bind(this);
  }

  // function LoadingMessage() {
  //   return (
  //     <div className="splash-screen">
  //       Loading...
  //       <div className="loading-dot">.</div>
  //     </div>
  //   );
  // }

  handleSplashClick(){
    this.setState({loading: false});
  };

  render(){
    return (
      <div className="splash-page">
        <button type="button" onClick={this.handleSplashClick()} className="splash-button">
          Play!
        </button>
      </div>
    );
  };
}

export default SplashPage;
