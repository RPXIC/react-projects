import React, { useEffect, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Project } from 'components'
import { ProjectContext, AlertContext } from 'context'

const ProjectsList = () => {

    const projectsContext = useContext(ProjectContext)
    const { msg, projects, getProjects } = projectsContext

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    useEffect(() => {

        if (msg) showAlert(msg.msg, msg.category)

        getProjects()
        //eslint-disable-next-line
    }, [msg])

    if (!projects.length) return <p>No projects</p>

    return (
        <ul className="projects-list">

            { alert ? ( <div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}

            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
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