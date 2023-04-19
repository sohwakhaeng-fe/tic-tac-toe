import { useState } from 'react';
import { Square } from './Square';

function App() {
  const [isNextO, setIsNextO] = useState(false);
  const [arr, setArr] = useState<null[] | string[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const oxCheckHandler = (i: number) => {
    const nextItem = arr.slice();
    if (nextItem[i] || winner(arr) !== null) return;
    isNextO ? (nextItem[i] = 'O') : (nextItem[i] = 'X');
    setIsNextO(!isNextO);
    setArr(nextItem);
    winner(arr);
  };

  const winner = (arr: null[] | string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(arr[a], arr[b], arr[c]);
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  };

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      {winner(arr) ? (
        <h1 className='mb-4 text-3xl font-bold'>Winner Player: {winner(arr)}</h1>
      ) : (
        <h1 className='mb-4 text-3xl font-bold'>Next Player: {isNextO ? 'O' : 'X'}</h1>
      )}

      <div className='flex'>
        <Square value={arr[0]} oxCheckHandler={() => oxCheckHandler(0)} />
        <Square value={arr[1]} oxCheckHandler={() => oxCheckHandler(1)} />
        <Square value={arr[2]} oxCheckHandler={() => oxCheckHandler(2)} />
      </div>
      <div className='flex'>
        <Square value={arr[3]} oxCheckHandler={() => oxCheckHandler(3)} />
        <Square value={arr[4]} oxCheckHandler={() => oxCheckHandler(4)} />
        <Square value={arr[5]} oxCheckHandler={() => oxCheckHandler(5)} />
      </div>
      <div className='flex'>
        <Square value={arr[6]} oxCheckHandler={() => oxCheckHandler(6)} />
        <Square value={arr[7]} oxCheckHandler={() => oxCheckHandler(7)} />
        <Square value={arr[8]} oxCheckHandler={() => oxCheckHandler(8)} />
      </div>
    </div>
  );
}

export default App;
