import React, { useContext } from 'react'
import { Todo } from 'components'
import { ProjectContext, TodoContext } from 'context'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TodoList = () => {
    const projectsContext = useContext(ProjectContext)
    const { project, deleteProject } = projectsContext

    const todosContext = useContext(TodoContext)
    const { todosproject } = todosContext

    if (!project) return <h2>Select project</h2>

    const [actualProject] = project

    const handleClick = () => {
        deleteProject(actualProject._id)
    }

    return (
        <>
            <h2>Project: {actualProject.name}</h2>

            <ul className="todo-list">
                {todosproject.length === 0
                    ? (<li className="todo"><p>No TODOs</p></li>)
                    : <TransitionGroup>
                        {todosproject.map(todo => (
                            <CSSTransition
                                key={todo._id}
                                timeout={200}
                                classNames="todo"
                            >
                                <Todo todo={todo} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

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