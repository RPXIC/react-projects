import React, { useContext } from 'react'
import { ProjectContext, TodoContext } from 'context'

const Todo = ({ todo }) => {
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext

    const todosContext = useContext(TodoContext)
    const { deleteTodo, getTodos, toggleState, actualTodo } = todosContext

    const handleDelete = id => {
        deleteTodo(id)
        getTodos(project[0].id)
    }

    const handleToggle = todo => {
        todo.state ? (todo.state = false) : (todo.state = true)
        toggleState(todo.state)
    }

    const selectTodo = todo => {
        actualTodo(todo)
    }

    return (
        <li className="todo shadow">
            <p>{todo.name}</p>
            <div className="state">
                {todo.state
                    ? (
                        <button
                            type="button"
                            className="complete"
                            onClick={() => handleToggle(todo)}
                        >Complete</button>
                    )
                    : (
                        <button
                            type="button"
                            className="incomplete"
                            onClick={() => handleToggle(todo)}
                        >Incomplete</button>
                    )
                }
            </div>

            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectTodo(todo)}
                >Edit</button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDelete(todo.id)}
                >Delete</button>
            </div>
        </li>
    )
}

export default Todo