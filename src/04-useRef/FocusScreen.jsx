import { useRef } from "react"

export const FocusScreen = () => {

    // const ref = useRef() // El "useRef" es que nos permite mantener alguna referencia (sea variable, elemento HTML o lo que sea ) y que cuanto esa referencia cambio, NO disparemos una "re-renderizacion" de nuetro componente...

    const inputRef = useRef()

    const onClick = () => {
        // document.querySelector('input').focus()
        // document.querySelector('input').select()
        // inputRef.current.setAttribute('placeholder', 'QEUSOO')
        inputRef.current.select()
        // console.log(inputRef.current)
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input 
            // Aca en el "inputRef" se almacenara el elemento "input"
                ref={inputRef}
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
                />
            <button 
                className="btn btn-primary mt-3"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}
