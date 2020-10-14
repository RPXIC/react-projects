import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import projectReducer from './projectReducer'
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from 'types'

const API_URL = process.env.REACT_APP_API_URL

const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        errorform: false,
        project: null,
        msg: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = async () => {
        const token = localStorage.getItem('token')

        try {
            const result = await fetch(`${API_URL}/api/projects`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token },
            })

            const { status } = result

            if (status === 200) {
                const res = await result.json()

                dispatch({
                    type: GET_PROJECTS,
                    payload: res
                })
            }

            if (status >= 400 && status <= 500) {
                const { statusText } = result

                const alert = {
                    msg: statusText,
                    category: 'alert-error'
                }

                dispatch({
                    type: PROJECT_ERROR,
                    payload: alert
                })
            }
        } catch (error) {
            const alert = {
                msg: error.message,
                category: 'alert-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    const addProject = async project => {
        const token = localStorage.getItem('token')

        try {
            const result = await fetch(`${API_URL}/api/projects`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token },
                body: JSON.stringify(project)
            })
            const { status } = result

            if (status === 200) {
                const res = await result.json()
        
                dispatch({
                    type: ADD_PROJECT,
                    payload: res
                })
            }

            if (status >= 400 && status <= 500) {
                const { statusText } = result

                const alert = {
                    msg: statusText,
                    category: 'alert-error'
                }

                dispatch({
                    type: PROJECT_ERROR,
                    payload: alert
                })
            }
        } catch (error) {
            const alert = {
                msg: error.message,
                category: 'alert-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
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

    const deleteProject = async projectId => {
        try {
            const token = localStorage.getItem('token')

            const result = await fetch(`${API_URL}/api/projects/${projectId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token },
            })

            const { status } = result

            if (status === 200) {
                await result.json()

                dispatch({
                    type: DELETE_PROJECT,
                    payload: projectId
                })
            }

            if (status >= 400 && status <= 500) {
                const { statusText } = result

                const alert = {
                    msg: statusText,
                    category: 'alert-error'
                }

                dispatch({
                    type: PROJECT_ERROR,
                    payload: alert
                })
            }
            
        } catch (error) {
            const alert = {
                msg: error.message,
                category: 'alert-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                msg: state.msg,
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