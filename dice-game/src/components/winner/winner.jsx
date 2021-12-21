import React from "react";
import "./winner.css";
import WinningSound from "../assets/sounds/sfx-victory6.mp3";

class Winner extends React.Component {
  playAudio = () => {
    new Audio(WinningSound).play();
  };
  componentDidMount() {
    this.playAudio();
  }
  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className=" winnerBox">
        <h1> player {this.props.player} win the game </h1>
        <br />

        <button className="newGameBtn" onClick={this.reset} > new game </button>
      </div>
    );
  }
}

export default Winner;
