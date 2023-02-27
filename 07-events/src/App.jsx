import React, { Component } from 'react'
import Button from './components/Button';

class App extends Component {

  /* constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log(this);
  } */

  /* handleClick = (e, msg) => {
    console.log(msg);
    console.log(e.target);
  } */

  handleClick = (e) => {
    console.log(e.target);
  }


  render() {
    return (
      <>


        <h1>Events</h1>
        <Button text="Click me!" onEventClick={this.handleClick}/>
        {/* <button onClick={this.handleClick}>Click me</button> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
        {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
        {/* <button onClick={(e) => this.handleClick(e,'Hello')}>Click me</button> */}




      </>
    );
  }
}

export default App;