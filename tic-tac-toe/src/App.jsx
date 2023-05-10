import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [message, setMessage] = useState("");

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = player ? "X" : "O";
    setSquares(squares);
    setPlayer(!player);
  };

  const calculateWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 7],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // winner 판별
  const winner = calculateWinner(squares);
  // if (winner) {
  //   setMessage(`Winner: ${winner}`);
  // } else {
  //   setMessage(`Next player: ${player ? "X" : "O"}`);
  // }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next player: " + (player ? "X" : "O");
  }

  const handleRestart = () => {
    setPlayer(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <>
      <p>{status}</p>
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={squares[index]}
            onClick={() => handleClick(index)}
          />
        ))}
        <button className="restart" onClick={handleRestart}>
          Restart Game !
        </button>
      </div>
    </>
  );
}

export default App
