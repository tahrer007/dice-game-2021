import React from "react";
import "./Player.css";
const isPlaying = (isplaying) => {
  console.log("is playing : " + isplaying);
  if (isplaying) return "playing";
  else return "";
};
class Player extends React.Component {
  
  state = {
    id: this.props.playerData.id,
    isTurn: this.props.playerData.isTurn,
    totalScore: this.props.playerData.totalScore,
    currentScore: this.props.playerData.currentScore,
}



  render() {
    //const player = this.props.playerData.isTurn;
    console.log(this.state.totalScore)
    return (
      <div className={`playerBoard ${isPlaying(this.state.isTurn)}`}>
        <div className="player center">
          Player {this.state.id}

        </div>
        <h3>toltal score : </h3>
        <div className="totalScore center">
         {this.state.totalScore}
        </div>
        <h3>current score : </h3>
        <div className="currentScore center">
        {this.state.currentScore}
        </div>
      </div>
    );
  }
}
export default Player;
