import React, { useState } from "react";
import { BoardValueType, PlayerType } from "./types";
import Board from "./components/Board";
import styled from "styled-components";
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
} from "./utils/validate";

export const App = () => {
  const [history, setHistory] = useState<BoardValueType[][][]>([
    BOARD_INIT_VALUE,
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [winner, setWinner] = useState<PlayerType | null>(null);
  const [isAsc, setIsAsc] = useState(true);

  const judgeWinner = (
    board: BoardValueType[][],
    clickedRow: number,
    clickedCol: number
  ) => {
    const isWin = isVaildLine(board, clickedRow, clickedCol);

    if (isWin) return setWinner(PLAYERS[(currentStep - 1) % NUM_PLAYERS]);
  };

  const isVaildLine = (
    board: BoardValueType[][],
    clickedRow: number,
    clickedCol: number
  ) => {
    const horizontalArr = board[clickedRow];
    const verticalArr = board.map((row) => row[clickedCol]);
    const diagonalLeftArr = board.map((row, idx) => row[idx]);
    const diagonalRightArr = board.map((row, idx) => row[BOARD_SIZE - 1 - idx]);

    if (
      isHorizontalMatch(horizontalArr) ||
      isVerticalMatch(verticalArr) ||
      isDiagonalMatch(diagonalLeftArr, diagonalRightArr)
    )
      return true;

    return false;
  };

  // 보드판 클릭 -> 이전 보드판 깊은 복사
  const play = (clickedRow: number, clickedCol: number) => {
    setCurrentStep((step) => step + 1);

    const currentBoard = [...history[currentStep]];

    const newBoard = currentBoard.map((rows, row) => {
      if (clickedRow !== row) return [...rows];

      return rows.map((value, col) =>
        clickedCol === col ? PLAYERS[(currentStep + 1) % NUM_PLAYERS] : value
      );
    });

    const newHistory = [...history.slice(0, currentStep + 1), newBoard];
    setHistory(newHistory);
    judgeWinner(newBoard, clickedRow, clickedCol);
  };

  const moveTo = (index: number) => {
    setCurrentStep(index);
  };

  const reverse = () => {
    setIsAsc((prev) => !prev);
  };

  return (
    <Container>
      <span>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${PLAYERS[currentStep % NUM_PLAYERS]}`}
      </span>
      <Board board={history[currentStep]} onPlay={play} winner={winner} />

      <HistoryButtonList>
        <button onClick={reverse}>정렬하기</button>
        {history.map((board, index) => (
          <button
            onClick={() => moveTo(isAsc ? index : history.length - index - 1)}
          >
            {`${isAsc ? index : history.length - index - 1}단계 로 이동`}
          </button>
        ))}
      </HistoryButtonList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const HistoryButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  button {
    background-color: white;
    border: 1px solid #777;
    border-radius: 6px;
    padding: 7px;

    :focus {
      background-color: lightblue;
    }
  }
`;
