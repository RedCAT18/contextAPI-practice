import React, { Component, createContext } from 'react';

//create context
const Context = createContext();

//createContext includes Provider and Consumer
//Both components are essential for using context
//Consumer is renamed to InputConsumer for facilitate to export
const { Provider, Consumer: InputConsumer } = Context;

class InputProvider extends Component {
  state = {
    value: 'Default Value'
  };

  //Object 'actions' is an arbitrary object.
  //To bring functions which mutate states all-together, but not separately.
  actions = {
    setValue: value => {
      this.setState({
        value // value:value
      });
    }
  };

  render() {
    const { state, actions } = this;
    //The value used in Provider is called "value".
    //To use value of Provider,
    //we can make the object including state and actions from current component
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

//create HoC(parameter: component) - create Component with comsumer
function useInputContext(WrappedComponent) {
  return function UseInputContext(props) {
    return (
      <InputConsumer>
        {({ state, actions }) => (
          <WrappedComponent value={state.value} setValue={actions.setValue} />
        )}
      </InputConsumer>
    );
  };
}

//Set prefix to avoid conflits between several contexts.
export { InputProvider, InputConsumer, useInputContext };
