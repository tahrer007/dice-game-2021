import React from "react";
import "./gamebord.css";
const zeroSum = 12;
const getRandomNumber = () => {
  let min = 1;
  let max = 7;
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

class gameBoard extends React.Component {
  sum = 0;
  state = {
    diceFace1: null,
    diceFace2: null,
    //player: this.props.player,
    dicesSum: 0,
    turnTotalScore: 0,
  };

  rollDice = () => {
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    let tempSum= random1 + random2 ; 
    //console.log("temp sum : "+ tempSum);
    this.setState({
      diceFace1: `face${random1}`,
      diceFace2: `face${random2}`,
      dicesSum: random1 + random2 ,
    });
    console.log(this.state.dicesSum)
    if (this.state.dicesSum === zeroSum) {
      this.setState({
        turnTotalScore: 0,
      });
    } else {
      let tempCurrent = this.state.turnTotalScore ; 
      tempCurrent+=tempSum ; 
      this.setState({
        turnTotalScore: tempCurrent,
      });
    }
  };



  changeTurn = () => {
    this.props.changeTurn(this.state.turnTotalScore);
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {
    //console.log(this.state.turnTotalScore)
  };

  render() {
    return (
      <div className="gameBoard">
        <div className="newGame"></div>
        <div className={`dice ${this.state.diceFace1}`}></div>
        <div className={`dice ${this.state.diceFace2}`}></div>
        <div className="hold" onClick={this.changeTurn}>
          {" "}
          hold
        </div>
        <div className="roll" onClick={this.rollDice}>
          roll dice
        </div>
      </div>
    );
  }
}
export default gameBoard;
