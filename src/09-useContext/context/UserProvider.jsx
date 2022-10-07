import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Fernando',
//     email: 'example@gmail.com'
// }

export const UserProvider = ({children}) => {
    // console.log(children)

    const [user, setUser] = useState()
    // console.log(user);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
