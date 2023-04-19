import React, { useEffect, useState } from "react";
import { BoardValueType, PlayerType } from "./types";
import Board from "./components/Board";
import {
  PLAYERS,
  NUM_PLAYERS,
  BOARD_SIZE,
  BOARD_INIT_VALUE,
} from "./constants/initialValue";
import {
  isHorizontalMatch,
  isVerticalMatch,
  isDiagonalMatch,
} from "./constants/validate";

export const App = () => {
  const [board, setBoard] =
    useState<Array<Array<BoardValueType>>>(BOARD_INIT_VALUE);

  const [currentStep, setCurrentStep] = useState(0);
  const [winner, setWinner] = useState<PlayerType | null>(null);

  const [clicked, setClicked] = useState({ row: -1, col: -1 });

  const isWin = () => {
    const { row, col } = clicked;

    const verticalArr = board.map((row) => row[col]);
    const diagonalLeftArr = board.map((row, idx) => row[idx]);
    const diagonalRightArr = board.map((row, idx) => row[BOARD_SIZE - 1 - idx]);

    if (
      isHorizontalMatch(board[row]) ||
      isVerticalMatch(verticalArr) ||
      isDiagonalMatch(diagonalLeftArr, diagonalRightArr)
    )
      return true;

    return false;
  };

  const play = (row: number, col: number) => {
    setClicked({ row, col });
    setCurrentStep((step) => step + 1);
    setBoard((board) => {
      const newBoard = [...board];

      newBoard[row][col] = PLAYERS[currentStep % NUM_PLAYERS];

      return newBoard;
    });
  };

  useEffect(() => {
    if (!isWin()) return;

    setWinner(PLAYERS[(currentStep - 1) % NUM_PLAYERS]);
  }, [board]);

  return (
    <>
      <span>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${PLAYERS[currentStep % NUM_PLAYERS]}`}
      </span>
      <Board board={board} onPlay={play} winner={winner} />
    </>
  );
};
