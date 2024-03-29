import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;   
  // Task: Restrict counter in between 0 and 20. logic implemented! 
 
  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter+1;
    if(counter<20)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = () => {
    if(counter>0)
      setCounter(counter-1)
    
    console.log("Removed Clicked", counter);
  }


  return (
    <>
      <h1>React Hooks</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App




// Read the documentations!
// Exactly why react Hooks were introduced::  -:

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  
//   let counter = 15;
 
//   const addValue = () => {
//     console.log("Clicked", counter);
//     counter = counter+1;
//   }

//   return (
//     <>
//       <h1>React Hooks</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue}
//       >Add Value{counter}</button>
//       <br />
//       <button>Remove Value{counter}</button>
//       <footer>Footer: {counter}</footer>
//     </>
//   )
// }

// export default App