import React from "react";
import "./App.css";
import { ReactDOM } from "react";

//component One: Square
// The Square component renders a single <button>
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  render() {
    return (
      //passing props to
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

//component Two: Board
// Board renders 9 squares
class Board extends React.Component {
  // To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.
  constructor(props) {
    super(props);
    // Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:
    this.state = { squares: Array(9).fill(null) };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  
  renderSquare(i) {
    

    // We will now use the prop passing mechanism again. We will modify the Board to instruct each individual Square about its current value ('X', 'O', or null). We have already defined the squares array in the Board’s constructor, and we will modify the Board’s renderSquare method to read from it:
    return (<Square value={this.state.squares[i]} 


    // we need to change what happens when a Square is clicked. The Board component now maintains which squares are filled. We need to create a way for the Square to update the Board’s state. Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.

    // Instead, we’ll pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked. We’ll change the renderSquare method in Board to:
    onClick = {()=>this.handleClick[i]}
    />);
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// component Three: Game
// The Game component renders a board
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<Game />);
export default Game;
