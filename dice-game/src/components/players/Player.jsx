import React from "react";
import "./Player.css";
import "../mediaQuery/mobile.css";
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
  /*componentDidUpdate = (nextProps) => {
    this.setState({
      id: nextProps.playerData[this.props.playerIdx].id,
      isTurn: nextProps.playerData[this.props.playerIdx].isTurn,
      totalScore: nextProps.playerData[this.props.playerIdx].totalScore,
      currentScore:nextProps.playerData[this.props.playerIdx].currentScore,
      });  
  };*/
  // *******************
  //TODO : USE ANOTHER WAY TO RE-REND
  // *******************
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.playerData[this.props.playerIdx].id,
      isTurn: nextProps.playerData[this.props.playerIdx].isTurn,
      totalScore: nextProps.playerData[this.props.playerIdx].totalScore,
      currentScore: nextProps.playerData[this.props.playerIdx].currentScore,
    });
  }

  render() {
    //console.log(this.props.playerData[this.props.playerIdx])
    // console.log("index : "+this.props.playerIdx)
    return (
      <div className="playerBoard">
        <div className={`player flexBoX ${isPlaying(this.state.isTurn)}`}>
          {" "}
          Player {this.state.id}
        </div>
        <h3>toltal score : </h3>
        <div className="totalScore flexBoX">{this.state.totalScore}</div>
        <h3>current score : </h3>
        <div className={`currentScore flexBoX ${isPlaying(this.state.isTurn)}`}>
          {this.state.currentScore}
        </div>
      </div>
    );
  }
}
export default Player;
