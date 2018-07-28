import React from 'react';
import { useCounterContext } from '../contexts/CounterContext';

const Counter = ({ number, increment, initialise }) => {
  return (
    <div className="counterbox">
      <h1> {number} </h1>
      <div className="buttons">
        <button onClick={increment} className="submit">
          더하기
        </button>
        <button onClick={initialise} className="submit">
          초기화
        </button>
      </div>
    </div>
  );
};

export default useCounterContext(Counter);
