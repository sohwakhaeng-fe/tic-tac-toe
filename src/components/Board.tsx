import React from "react";
import { BOARD_SIZE } from "../constants/initialValue";
import Square from "./Square";
import { PlayerType, BoardValueType } from "../types";
import styled from "styled-components";

interface BoardProps {
  board: Array<Array<BoardValueType>>;
  onPlay: (row: number, col: number) => void;
  winner: PlayerType | null;
}

const Board = ({ board, ...props }: BoardProps) => {
  return (
    <BoardContainer>
      {board.map((rows, rowIdx) =>
        rows.map((value, colIdx) => (
          <Square
            row={rowIdx}
            col={colIdx}
            key={rowIdx + colIdx}
            value={value}
            {...props}
          />
        ))
      )}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(${BOARD_SIZE}, 100px);
    grid-template-rows: repeat(${BOARD_SIZE}, 100px);
  }
`;
