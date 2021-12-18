import React from "react";
import "./Player.css";
const isPlaying = (isplaying) => {
  if (isplaying) return "playing";
  else return "";
};
class Player extends React.Component {

  state = {
    id: this.props.playerData[this.props.playerIdx].id,
    isTurn: this.props.playerData[this.props.playerIdx].isTurn,
    totalScore: this.props.playerData[this.props.playerIdx].totalScore,
    currentScore: this.props.playerData[this.props.playerIdx].currentScore,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.playerData[this.props.playerIdx].id,
      isTurn: nextProps.playerData[this.props.playerIdx].isTurn,
      totalScore: nextProps.playerData[this.props.playerIdx].totalScore,
      currentScore:nextProps.playerData[this.props.playerIdx].currentScore,
      });  
  }

  render() {
    //console.log(this.props.playerData[this.props.playerIdx])
   // console.log("index : "+this.props.playerIdx)
    return (
      <div className={`playerBoard ${isPlaying(this.state.isTurn)}`}>
        <div className="player center"> Player {this.state.id}</div>
        <h3>toltal score : </h3>
        <div className="totalScore center">{this.state.totalScore}</div>
        <h3>current score : </h3>
        <div className="currentScore center">{this.state.currentScore}</div>
      </div>
    );
  }
}
export default Player;
