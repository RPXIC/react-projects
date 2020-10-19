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
        <li data-cy="todo" className="todo shadow">
            <p>{todo.name}</p>
            <div className="state">
                {todo.state
                    ? (
                        <button
                            data-cy="todo-completed"
                            type="button"
                            className="completed"
                            onClick={() => handleToggle(todo)}
                        >Completed</button>
                    )
                    : (
                        <button
                            data-cy="todo-incompleted"
                            type="button"
                            className="incompleted"
                            onClick={() => handleToggle(todo)}
                        >Incompleted</button>
                    )
                }
            </div>

            <div className="actions">
                <button
                    data-cy="btn-edit"
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectTodo(todo)}
                >Edit</button>
                <button
                    data-cy="btn-delete"
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