import React from 'react';
import { useInputContext } from '../contexts/inputContext';
// import { InputConsumer } from '../contexts/inputContext';

const Receives = ({ value }) => {
  return (
    // <InputConsumer>
    //   {({ state }) => <div>현재 설정된 값: {state.value}</div>}
    // </InputConsumer>
    <div>현재 설정된 값: {value}</div>
  );
};

// export default Receives;
export default useInputContext(Receives);
