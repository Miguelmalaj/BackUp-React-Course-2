import React, { Component } from 'react';

class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = { number:5 };
  } */
  state = { number: this.props.number }
  handleClickI = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleClickD = () => {
    this.setState({
      number: this.state.number -1
    })
  }

  handleClickR = () => {
    this.setState({
      number: this.state.number=0
    })
  }

  render() {
    return (
      <>
      <h1>Number: {this.state.number} </h1>
      <button onClick={this.handleClickI}>Increment</button>
      <button onClick={this.handleClickR}>Reset</button>
      <button onClick={this.handleClickD}>Decrement</button>
      </>
    );
  }
}

App.defaultProps = {
  number:0
}

export default App;