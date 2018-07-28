import React, { Component } from 'react';
import { InputConsumer } from '../contexts/inputContext';

class Sends extends Component {
  state = {
    input: ''
  };

  componentDidMount() {
    //set initial value
    this.setState({
      input: this.props.value
    });
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //call setValue from props
    this.props.setValue(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button className="submit" type="submit">
          설정
        </button>
      </form>
    );
  }
}

//create another component which use consumer (because method uses actions)
const SendsContainer = () => {
  return (
    <InputConsumer>
      {({ state, actions }) => (
        <Sends value={state.value} setValue={actions.setValue} />
      )}
    </InputConsumer>
  );
};

//export SendsContainer instead of Sends
export default SendsContainer;
