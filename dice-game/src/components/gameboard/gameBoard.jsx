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
    dicesSum: null,
    turnTotalScore: 0,
  };

  rollDice = () => {
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    let turnSum = random1 + random2;
    console.log("turnSum : " + turnSum);
    this.setState({
      diceFace1: `face${random1}`,
      diceFace2: `face${random2}`,
      dicesSum: turnSum,
    });

    if (this.state.dicesSum === zeroSum) {
      this.setState({
        turnTotalScore: 0,
      });
    } else {
      let tempCurrent = this.state.turnTotalScore;
      tempCurrent += turnSum;
      this.setState({
        turnTotalScore: tempCurrent,
      });
    }
  };

  changeTurn = () => {
    this.props.changeTurn(this.state.turnTotalScore);
    this.setState({
      dicesSum: 0,
      turnTotalScore: 0,
    });
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log("dice sum : " + this.state.dicesSum);
    console.log("turn total  sum : " + this.state.turnTotalScore);
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
