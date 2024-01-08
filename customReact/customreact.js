function customRender(reactElement, container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in props) {
        if(prop == children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


// ReactDOM.createRoot(document.getElementById('root')).
// render(

//     anotherElement
// )
const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)

