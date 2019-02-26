import React, {Component} from 'react';
import App from '../App';
import "./withSplashPage.css";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Loading...
      <div className="loading-dot">.</div>
    </div>
  );
}

function handleSplashClick(){
  render() {
    return(
      <App />
    );
  };
};

function withSplashPage(WrappedComponent){
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        await App.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return (
        <div className="splash-page">
          <button type="button" onClick={() => {handleSplashClick()}} className="splash-button">
            Play!
          </button>
        </div>
      );
    }
  };
}

export default withSplashPage;
