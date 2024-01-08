import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


const anotherUser = "code and chill"


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(                    //Light-Weight! 

    ReactElement
    // <ReactElement/>              Object can't be used like this. JS Concept
    // <MyApp />                       //Custom App shown due to this
    // anotherElement
    // MyApp()
    // <App/>                       //Otherwise this is showing by default.
)
