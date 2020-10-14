import React, { useContext, useState, useEffect } from 'react'
import { ProjectContext, TodoContext } from 'context'

const TodoForm = () => {
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext

    const todosContext = useContext(TodoContext)
    const { todoselected, todoerror, addTodo, validateTodo, getTodos, editTodo, cleanTodo } = todosContext

    useEffect(() => {
        if (todoselected !== null) {
            setTodo(todoselected)
        } else {
            setTodo({
                name: ''
            })
        }
    }, [todoselected])

    const [todo, setTodo] = useState({
        name: ''
    })

    const { name } = todo

    if (!project) return null

    const [actualProject] = project

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (name.trim() === '') return validateTodo()

        if (todoselected === null) {
            todo.project = actualProject._id
            addTodo(todo)
        } else {
            editTodo(todo)
            cleanTodo()
        }

        getTodos(actualProject._id)

        setTodo({
            name: ''
        })
    }

    return (
        <div className="form">
            <form
                onSubmit={handleSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Todo name..."
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value={todoselected ? 'Edit TODO' : 'Add TODO'}
                    />
                </div>
            </form>
            { todoerror ? <p className="msg error">Name are required</p> : null}
        </div>
    )
}

export default TodoForm