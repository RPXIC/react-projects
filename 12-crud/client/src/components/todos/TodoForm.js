import React, { useContext } from 'react'
import { ProjectContext } from 'context'

const TodoForm = () => {
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext

    if (!project) return null

    //const [acutalProject] = project

    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Todo name..."
                        name="name"
                    />
                </div>

                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add TODO"
                    />
                </div>
            </form>
        </div>
    )
}

export default TodoForm