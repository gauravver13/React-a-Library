import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "gaurav",
    age:21
  }

  let newArr = [1, 2, 3]

  return (
    <>

    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="Hello props" someObje={newArr} />
    <Card username="You are amazing props! " btnText="click me" />
    <Card username="Hooks and Props!" btnText= "visit me"/>
  

    </>
  )
}

export default App