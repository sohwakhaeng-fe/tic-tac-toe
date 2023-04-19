import { PlayerType } from "../types";

export const BOARD_SIZE = 3;

export const NUM_PLAYERS = 2;

export const PLAYERS: { [key: number]: PlayerType } = {
  0: "X",
  1: "O",
};

export const BOARD_INIT_VALUE = Array.from({ length: BOARD_SIZE }, () =>
  Array.from({ length: BOARD_SIZE }, () => null)
);
