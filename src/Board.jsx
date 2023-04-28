import React, { useState } from "react";
import Square from "./Square";
import judgeWinner from "./utils/judgeWinner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xOrO, setXOrO] = useState(true);
  console.log(squares);
  let status;

  xOrO ? (status = "Next Player : X") : (status = "Next Player : O");
  const handleSquareClick = (i) => {
    const nextSquares = [...squares];
    if (squares[i] || judgeWinner(squares)) return;
    if (xOrO) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXOrO(!xOrO);
  };
  return (
    <>
      {judgeWinner(squares) ? (
        `Winner : ${judgeWinner(squares)}`
      ) : (
        <p>Next Player : {xOrO ? "X" : "O"}</p>
      )}

      <div className="board">
        <Square value={squares[0]} handleClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} handleClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} handleClick={() => handleSquareClick(2)} />
        <Square value={squares[3]} handleClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} handleClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} handleClick={() => handleSquareClick(5)} />
        <Square value={squares[6]} handleClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} handleClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} handleClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
};

export default Board;
