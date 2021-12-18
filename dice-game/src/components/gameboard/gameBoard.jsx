import React from "react";
import "./gamebord.css";

class gameBoard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    return (
      <div className="gameBoard">
        <div className="newGame"></div>
        <div className="dice"></div>
        <div className="dice"></div>
        <div className="hold"></div>
        <div className="roll"></div>
      </div>
    );
  }
}
export default gameBoard;
