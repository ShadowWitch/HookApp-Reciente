import { useContext } from "react"

import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const {user} = useContext(UserContext)

    // user?.name // En caso de que el user exista que me muestre el "name"

    return (
        <>
            <h1>HomePage <span>{user?.name}</span></h1>
            <hr />
            <pre>
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>
        </>
    )
}
