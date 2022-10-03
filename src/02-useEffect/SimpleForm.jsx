import { useEffect, useState } from "react"

import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'pedro@gmail.com'
    })
    const {username, email} = formState

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }    

    // useEffect es para efectos secundarios o disparar algo en segundo plano, siempre que se cargue el componente se va a disparar o depende de la condicion o dependencia que le pasemos... En este caso como no le hemos pasado opciones Si se ejecutara cada vez que cargue el componente
    // useEffect(() => {
    //     console.log('hola useEffectssss!')
    // })

    // useEffect(() => {
    //     console.log('hola useEffect')
    // }, [])

    // useEffect(() => {
    //     console.log('formState called!')
    // }, [formState])

    // useEffect(() => {
    //     console.log('Email called!')
    // }, [email])


    return (
        <>
            <h1>SimpleForm</h1>
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
            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
