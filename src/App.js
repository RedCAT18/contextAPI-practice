import React, { Component } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';

//provider
import { InputProvider } from './contexts/inputContext';

class App extends Component {
  render() {
    return (
      <InputProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </InputProvider>
    );
  }
}

export default App;
