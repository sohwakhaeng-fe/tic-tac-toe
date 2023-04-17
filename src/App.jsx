import { useState } from "react";
import "./App.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  let nextPlayer;
  nextPlayer = isX ? "Next player: X" : "Next player: O";

  const handleSquareClick = (i) => {
    if (squares[i]) {
      return;
    }
    const nextSqaure = squares.slice();
    if (isX) {
      nextSqaure[i] = "X";
    } else {
      nextSqaure[i] = "O";
    }
    setSquares(nextSqaure);
    setIsX(!isX);
  };

  return (
    <>
      <p className="next-player">{nextPlayer}</p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

export default TicTacToe;
