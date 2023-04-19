import { useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";
import calcultateWinner from "./utils/calculateWinner";

function App() {
  const [nextX, setNextX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calcultateWinner(squares);
  let status;
  if (winner) {
    status = "winner : " + winner;
  } else {
    status = "NextPlayer : " + (nextX ? "X" : "O");
  }
  const handleClick = (i) => {
    if (squares[i] || calcultateWinner(squares)) {
      return;
    }
    const nextSquares = { ...squares };
    if (nextX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setNextX(!nextX);
  };

  return (
    <>
      {status}
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
