import React, { useState, useEffect } from "react";

import { useHttp } from "./components/hooks/useHttp";

const App = () => {
  const [ id, setId ] = useState(3)
  const [ post, isLoading ] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
  const handlePrevId = () => {
    if ( id > 1 ) setId( id - 1)
  }
  const handleNextId = () => {
    setId( id + 1)

  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{JSON.stringify(post)}</p>
      <button disabled={isLoading} onClick={handlePrevId}>Prev Id</button>
      <button disabled={isLoading} onClick={handleNextId}>Next Id</button>
      <p>{id}</p>
      {isLoading && 'Loading...'}
    </>
  )
}

export default App;