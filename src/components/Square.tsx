import React from "react";
import styled from "styled-components";
import { PlayerType, BoardValueType } from "../types";

interface SquareProps {
  row: number;
  col: number;
  value: BoardValueType;
  winner: PlayerType | null;
  onPlay: (row: number, col: number) => void;
}

const Square = ({ row, col, value, winner, onPlay }: SquareProps) => {
  return (
    <SqaureWrapper
      disabled={!!winner || !!value}
      onClick={() => onPlay(row, col)}
    >
      {value}
    </SqaureWrapper>
  );
};

export default Square;

const SqaureWrapper = styled.button`
   {
    color: black;
    font-size: 30px;
    outline: 1px solid black;
    border: none;
    background-color: white;
  }
`;
