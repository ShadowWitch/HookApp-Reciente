import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange, onResetForm} = useForm({
        id: new Date().getTime(),
        description: '',
        done: false
    })

    const onSubmit = (e) =>{    
        e.preventDefault()
        if(formState.description.trim().length <= 1) return alert('Ingrese data');
        onNewTodo(formState)
        onResetForm()
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <input 
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={formState.description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-3"
                >Agregar</button>
        </form>
    )
}
