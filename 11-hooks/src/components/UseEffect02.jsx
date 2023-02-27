import React, { useState, useEffect } from "react";

const App = () => {
  const [ counter1, setCounter1 ] = useState(0)
  const [ counter2, setCounter2 ] = useState(0)

  const handleCounter1 = () => setCounter1( counter1 + 1 )
  const handleCounter2 = () => setCounter2( counter2 + 1 )

  useEffect(() => {
   console.log('use effect');
  }, [counter1, counter2])
  

  return (
    <>
      <h2>Counter 1: {counter1}</h2>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={handleCounter1}>Counter 1</button>
      <button onClick={handleCounter2}>Counter 2</button>
    </>
  )
}

export default App;