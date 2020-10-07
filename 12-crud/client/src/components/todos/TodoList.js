import React, { useContext } from 'react'
import { Todo } from 'components'
import { ProjectContext, TodoContext } from 'context'

const TodoList = () => {
    const projectsContext = useContext(ProjectContext)
    const { project, deleteProject } = projectsContext

    const todosContext = useContext(TodoContext)
    const { todosproject } = todosContext

    if (!project) return <h2>Select project</h2>

    const [actualProject] = project

    const handleClick = () => {
        deleteProject(actualProject.id)
    }

    return (
        <>
            <h2>Project: {actualProject.name}</h2>

            <ul className="todo-list">
                {todosproject.length === 0
                    ? (<li className="todo"><p>No TODOs</p></li>)
                    :
                    todosproject.map(todo => (
                        <Todo
                            todo={todo}
                        />
                    ))

                }
            </ul>

            <button
                type="button"
                className="btn btn-delete"
                onClick={handleClick}
            >Delete Project &times;</button>
        </>
    )
}

export default TodoList