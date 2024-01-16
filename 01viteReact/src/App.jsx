
import Coffee from "./coffee"

function App() {
    const username = "code and chill"

    return (
        <>
        <h1>Chai or react with vite | Gaurav </h1>
        <Coffee/>
         <h1>Chai or react {username}</h1>
         <p>Test para</p>            
         <p>//Error is: We can create only one element in return! but we can attach any of the number of element inside it. </p>
        </>
    )
}

export default App