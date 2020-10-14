import React, { useContext } from 'react'
import PropTypes from 'prop-types'
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
                onClick={() => selectProject(project._id)}
            >{project.name}</button>
        </li>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project