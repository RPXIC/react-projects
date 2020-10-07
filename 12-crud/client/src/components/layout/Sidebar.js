import React from 'react'
import { NewProject, ProjectsList } from 'components'

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject />

            <div className="projects">
                <h2>Your projects</h2>

                <ProjectsList />
            </div>
        </aside>
    )
}

export default Sidebar