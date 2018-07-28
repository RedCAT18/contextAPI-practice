import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: CounterConsumer } = Context;

class CounterProvider extends Component {
  state = {
    number: 1
  };

  actions = {
    increment: () => {
      this.setState(({ number }) => ({ number: number + 1 }));
    },
    initialise: () => {
      this.setState(() => ({ number: 1 }));
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function useCounterContext(WrappedComponent) {
  return function useCounter(props) {
    return (
      <CounterConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            number={state.number}
            increment={actions.increment}
            initialise={actions.initialise}
          />
        )}
      </CounterConsumer>
    );
  };
}

export { CounterProvider, CounterConsumer, useCounterContext };
