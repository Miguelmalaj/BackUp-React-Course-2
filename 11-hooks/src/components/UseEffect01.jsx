import React, { useState, useEffect } from "react";

const App = () => {
  const [ date, setDate ] = useState( new Date().toLocaleTimeString() )

  useEffect(()=> {
    //componentDidMount
    console.log('mounted')
    const time = setInterval(()=> setDate( new Date().toLocaleTimeString(), 1000 ))
    //componentWillUnmount
    return () => {
      clearInterval(time)
    }
  })

  return (
    <h1>{date}</h1>
  )
}

export default App;