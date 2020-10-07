import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import projectReducer from './projectReducer'
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from 'types'
import { v4 as uuid } from 'uuid'

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'shop' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'design' },
        { id: 4, name: 'MERN' }
    ]

    const initialState = {
        projects: [],
        form: false,
        errorform: false,
        project: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project => {
        project.id = uuid()

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState