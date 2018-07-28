import React, { Component } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Counter from './components/Counter';

//provider
import { InputProvider } from './contexts/inputContext';
import { CounterProvider } from './contexts/CounterContext';

//use multiple contexts
const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

const App = () => {
  return (
    <AppProvider contexts={[InputProvider, CounterProvider]}>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </AppProvider>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <InputProvider>
//         <div className="panes">
//           <LeftPane />
//           <RightPane />
//         </div>
//       </InputProvider>
//     );
//   }
// }

export default App;
