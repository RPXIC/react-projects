import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { TODOS_PROJECT, ADD_TODO, VALIDATE_TODO, DELETE_TODO, ACTUAL_TODO, EDIT_TODO, CLEAN_TODO } from 'types'

const API_URL = process.env.REACT_APP_API_URL

const TodoState = props => {
    const initialState = {
        todosproject: [],
        todoerror: false,
        todoselected: null
    }

    const [state, dispath] = useReducer(TodoReducer, initialState)

    const getTodos = async project => {
        const token = localStorage.getItem('token')

        try {
            const result = await fetch(`${API_URL}/api/tasks/${project}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token }
            })

            const { status } = result

            if (status === 200) {
                const res = await result.json()

                dispath({
                    type: TODOS_PROJECT,
                    payload: res
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addTodo = async todo => {
        const token = localStorage.getItem('token')

        try {
            const result = await fetch(`${API_URL}/api/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token},
                body: JSON.stringify(todo)
            })

            const { status } = result
    
            if (status === 200) {
                await result.json()

                dispath({
                    type: ADD_TODO,
                    payload: todo
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const validateTodo = () => {
        dispath({
            type: VALIDATE_TODO
        })
    }

    const deleteTodo = async (id, project) => {
        const token = localStorage.getItem('token')

        try {
            await fetch(`${API_URL}/api/tasks/${id}/${project}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': token},
            })
            dispath({
                type: DELETE_TODO,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const editTodo = async todo => {
        try {
            const token = localStorage.getItem('token')

            const result = await fetch(`${API_URL}/api/tasks/${todo._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(todo)
            })

            const { status } = result

            if (status === 200) {
                const res = await result.json()

                dispath({
                    type: EDIT_TODO,
                    payload: res.task
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const actualTodo = todo => {
        dispath({
            type: ACTUAL_TODO,
            payload: todo
        })
    }

    const cleanTodo = () => {
        dispath({
            type: CLEAN_TODO
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todosproject: state.todosproject,
                todoerror: state.todoerror,
                todoselected: state.todoselected,
                getTodos,
                addTodo,
                validateTodo,
                deleteTodo,
                actualTodo,
                editTodo,
                cleanTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState