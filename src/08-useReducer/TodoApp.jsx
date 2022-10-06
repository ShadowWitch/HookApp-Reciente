import { useTodo } from "../hooks/index.barril"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
    const {todos, allTodos, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewtodo} = useTodo()

    return (
        <>
            <h1>TodoApp {allTodos}, <small>pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={handleNewtodo}
                    />
                </div>
            </div>
        </>
    )
}
