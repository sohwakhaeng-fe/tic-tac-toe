import { useState } from 'react';
import { Square } from './Square';

function App() {
  const [isNextO, setIsNextO] = useState(true);
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
    if (nextItem[i] !== null) return;
    isNextO ? (nextItem[i] = 'X') : (nextItem[i] = 'O');
    setIsNextO(!isNextO);
    setArr(nextItem);
  };
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-3xl font-bold'>Next Player: {isNextO ? 'X' : 'O'}</h1>
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
