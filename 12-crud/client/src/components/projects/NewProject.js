import React, { useState, useContext } from 'react'
import { ProjectContext } from 'context'

const NewProject = () => {

    const projectsContext = useContext(ProjectContext)
    const { form, errorform, showForm, addProject, showError } = projectsContext

    const [project, setProject] = useState({
        name: ''
    })

    const { name } = project

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (name.trim() === '') return showError()

        addProject(project)

        setProject({
            name: ''
        })
    }

    return (
        <>
            <button
                data-cy="button-new-project"
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => showForm()}
            >New Project
            </button>

            { form ? (
                <form
                    data-cy="form-new-project"
                    className="new-project-form"
                    onSubmit={handleSubmit}
                >
                    <input
                        data-cy="name-input-new-project"
                        type="text"
                        className="input-text"
                        placeholder="Project name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />

                    <input
                        data-cy="submit-new-project"
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Add project"
                    />

                </form>
            ) : (
                    null
                )
            }

            { errorform ? <p data-cy="alert" className="msg error">Name is required</p> : null}
        </>
    )
}

export default NewProject