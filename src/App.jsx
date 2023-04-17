import { useState } from "react";
import "./App.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

function isWinner(squares) {
  const winnerFomula = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerFomula.length; i++) {
    const [a, b, c] = winnerFomula[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  let playerStatus;
  let winner = isWinner(squares);

  if (winner) {
    playerStatus = "Winner is " + winner;
  } else {
    playerStatus = "Next Player: " + (isX ? "X" : "O");
  }

  const handleSquareClick = (i) => {
    if (squares[i] || isWinner(squares)) {
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
    return;
  };

  return (
    <>
      <p className="next-player">{playerStatus}</p>
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
