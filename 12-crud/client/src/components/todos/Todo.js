import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ProjectContext, TodoContext } from 'context'

const Todo = ({ todo }) => {
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext

    const todosContext = useContext(TodoContext)
    const { deleteTodo, getTodos, editTodo, actualTodo } = todosContext

    const [actualProject] = project

    const handleDelete = id => {
        deleteTodo(id, actualProject._id)
        getTodos(actualProject._id)
    }

    const handleToggle = todo => {
        todo.state ? (todo.state = false) : (todo.state = true)
        editTodo(todo)
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
                    onClick={() => handleDelete(todo._id)}
                >Delete</button>
            </div>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todo