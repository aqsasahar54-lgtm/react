import React from 'react'
import Welcome from "./components/welcome"

const name = "Aqsa"
const age = 26

const App = () => {
  return (
    <div>
      <h1>My Name is {name}</h1>
      <p>My age is {age}</p>
      <Welcome/>
    </div>
  )
}

export default App