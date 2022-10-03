import { memo } from "react"

export const Small = memo(({value}) => {

    // "memo" lo que hace es renderizar el componete SOLO SI LAS PROPS CAMBIAN... Y como parametro recibe todo el componente entero y lo memoriza

    console.log('Me volvi a generar')

    return (
        <small>{value}</small>
    )
})
