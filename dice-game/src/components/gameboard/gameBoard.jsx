import React from "react";
import "./gamebord.css";
const zeroSum = 12 ; 
const getRandomNumber = () => {
  let min = 1;
  let max = 7;
  let random = Math.floor(Math.random() * (max - min) + min);

  return random;
};

class gameBoard extends React.Component {
  state = {
    diceFace1: null,
    diceFace2: null,
  };
  rollDice = () => {
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    this.setState({
      diceFace1: `face${random1}`,
      diceFace2: `face${random2}`,
    });
    const sum = random2 + random1;
    if (sum === zeroSum) {
      this.props.rollDice(0);
    } else this.props.rollDice(sum);
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    return (
      <div className="gameBoard">
        <div className="newGame"></div>
        <div className={`dice ${this.state.diceFace1}`}></div>
        <div className={`dice ${this.state.diceFace2}`}></div>
        <div className="hold"> hold</div>
        <div className="roll" onClick={this.rollDice}>
          roll dice
        </div>
      </div>
    );
  }
}
export default gameBoard;
