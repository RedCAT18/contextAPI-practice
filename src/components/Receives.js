import React from 'react';
import { InputConsumer } from '../contexts/inputContext';

const Receives = () => {
  return (
    <InputConsumer>
      {({ state }) => <div>현재 설정된 값: {state.value}</div>}
    </InputConsumer>
  );
};

export default Receives;
