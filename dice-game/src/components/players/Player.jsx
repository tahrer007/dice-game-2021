import React from "react";
import "./Player.css";
const isPlaying = (isplaying) => {
  console.log("is playing : " + isplaying);
  if (isplaying) return "playing";
  else return "";
};
class Player extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  
  

  render() {
    const player = this.props.playerData;
    
   
    return (
      <div className={`playerBoard`}>
        <div className="player"></div>
        <h3>toltal score : </h3>
        <div className="totalScore"></div>
        <h3>current score : </h3>
        <div className="currentScore"></div>
      </div>
    );
  }
}
export default Player;
