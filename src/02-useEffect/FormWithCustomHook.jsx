import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    // console.log(username, email, password)

    return (
        <>
            <h1>Formulario con Custom Hooks</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-3"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-3"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-success mt-3">Reset</button>
        </>
    )
}
