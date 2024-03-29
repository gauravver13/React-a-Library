// /* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import UserContext from "./UserContext";

// const UserContextProvide = ({children}) => {
//     const [user, setUser] = React.useState(null)
//     return(
//         <UserContext.Provider value={{user, setUser}}>
//         {children}
//         </UserContext.Provider>
//     )    
// }

// export default UserContextProvider 


import React, {useContext} from 'react'
import UserContext from './UserContext'

const UserContextProvide = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvide