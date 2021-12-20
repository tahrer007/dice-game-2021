import React from "react";
import "./Player.css";
import "../mediaQuery/mobile.css";
const isPlaying = (isplaying) => {
  if (isplaying) return "playing";
  else return "";
};
class Player extends React.Component {
  render() {
    return (
      <div className="playerBoard">
        <div
          className={`player flexBoX ${isPlaying(
            this.props.playerData[this.props.playerIdx].isPlaying
          )}`}
        >
          {" "}
          Player {this.props.playerData[this.props.playerIdx].id}
        </div>
        <h3>toltal score : </h3>
        <div className="totalScore flexBoX">
          {this.props.playerData[this.props.playerIdx].totalScore}
        </div>
        <h3>current score : </h3>
        <div
          className={`currentScore flexBoX ${isPlaying(
            this.props.playerData[this.props.playerIdx].isPlaying
          )}`}
        >
          {this.props.playerData[this.props.playerIdx].currentScore}
        </div>
      </div>
    );
  }
}
export default Player;
