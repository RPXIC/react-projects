import React, { useContext } from 'react'
import { ProjectContext, TodoContext } from 'context'

const Project = ({ project }) => {
    const projectsContext = useContext(ProjectContext)
    const { actualProject } = projectsContext

    const todosContext = useContext(TodoContext)
    const { getTodos } = todosContext

    const selectProject = id => {
        actualProject(id)
        getTodos(id)
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >{project.name}</button>
        </li>
    )
}

export default Project