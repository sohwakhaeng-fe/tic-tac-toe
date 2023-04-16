import { useState } from 'react';

interface SqaureProps {
  value: null | string;
  oxCheckHandler: () => void;
}

export const Square = ({ value, oxCheckHandler }: SqaureProps) => {
  return (
    <div
      className='flex h-20 w-20 items-center justify-center border border-gray-400 text-6xl'
      onClick={oxCheckHandler}
    >
      {value}
    </div>
  );
};
