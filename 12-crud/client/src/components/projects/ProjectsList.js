import React, { useEffect, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Project } from 'components'
import { ProjectContext } from 'context'

const ProjectsList = () => {

    const projectsContext = useContext(ProjectContext)
    const { projects, getProjects } = projectsContext

    useEffect(() => {
        getProjects()
        //eslint-disable-next-line
    }, [])

    if (!projects.length) return <p>No projects</p>

    return (
        <ul className="projects-list">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
                        timeout={200}
                        classNames="project"
                    >
                        <Project project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectsList