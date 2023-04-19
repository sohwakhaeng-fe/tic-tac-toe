import { BoardValueType } from "../types";

const isMatch = (arr: Array<BoardValueType>) => {
  if (arr && !arr[0]) return false;

  return !arr?.some((value) => value !== arr[0]);
};

export const isHorizontalMatch = (arr: Array<BoardValueType>) => {
  return isMatch(arr);
};

export const isVerticalMatch = (arr: Array<BoardValueType>) => {
  return isMatch(arr);
};

export const isDiagonalMatch = (
  leftArr: Array<BoardValueType>,
  rightArr: Array<BoardValueType>
) => {
  if (isMatch(leftArr) || isMatch(rightArr)) return true;

  return false;
};
