import React, { useState } from 'react';
import Form from './components/Form';
const App = ({ initialNumber=23 }) => {
  /* constructor(props) {
    super(props);
    this.state = { number:5 };
  } */
  // state = { number: 5 }
  const [number=initialNumber, setNumber] = useState( 10 );
  const [text, setText] = useState('')
  const handleClickI = () => {
    
    setNumber( number + 1)
  }

  const handleClickD = () => {
    
    setNumber( number - 1)
  }

  const handleClickR = () => {
    // this.setState({
    //   number: this.state.number=0
    // })
    setNumber( 0 )
  }

  const handleInput = (e) => {
    setText(e.target.value)
  }
  
    return (
      <>
      <h1>Number: {number} </h1>
      <button onClick={handleClickI}>Increment</button>
      <button onClick={handleClickR}>Reset</button>
      <button onClick={handleClickD}>Decrement</button>
      <p>Contenido del input { text }</p>
      <input type="text" onChange={handleInput}/>
      </>
    );
  
}



export default App;