import React, { useEffect, useContext } from 'react'
import { Project } from 'components'
import { ProjectContext } from 'context'

const ProjectsList = () => {

    const projectsContext = useContext(ProjectContext)
    const { projects, getProjects } = projectsContext

    useEffect(() => {
        getProjects()
    }, [])

    if (!projects.length) return <p>No projects</p>

    return (
        <ul className="projects-list">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ProjectsList