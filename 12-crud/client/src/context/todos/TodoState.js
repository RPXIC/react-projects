import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { TODOS_PROJECT, ADD_TODO, VALIDATE_TODO, DELETE_TODO, TODO_STATE, ACTUAL_TODO, EDIT_TODO, CLEAN_TODO } from 'types'
import { v4 as uuid } from 'uuid'

const TodoState = props => {
    const initialState = {
        todos: [
            { id: 1, name: 'choose platform', state: true, projectId: 1 },
            { id: 2, name: 'choose colors', state: false, projectId: 2 },
            { id: 3, name: 'choose platform pay', state: false, projectId: 3 },
            { id: 4, name: 'choose hosting', state: true, projectId: 4 },
            { id: 5, name: 'choose platform', state: true, projectId: 1 },
            { id: 6, name: 'choose colors', state: false, projectId: 2 },
            { id: 7, name: 'choose platform pay', state: false, projectId: 3 },
            { id: 8, name: 'choose platform', state: true, projectId: 4 },
            { id: 9, name: 'choose colors', state: false, projectId: 1 },
            { id: 10, name: 'choose platform pay', state: false, projectId: 2 },
            { id: 11, name: 'choose platform', state: true, projectId: 3 },
            { id: 12, name: 'choose colors', state: false, projectId: 4 },
            { id: 13, name: 'choose platform pay', state: false, projectId: 3 }
        ],
        todosproject: null,
        todoerror: false,
        todoselected: null
    }

    const [state, dispath] = useReducer(TodoReducer, initialState)

    const getTodos = projectId => {
        dispath({
            type: TODOS_PROJECT,
            payload: projectId
        })
    }

    const addTodo = todo => {
        todo.id = uuid()
        dispath({
            type: ADD_TODO,
            payload: todo
        })
    }

    const validateTodo = () => {
        dispath({
            type: VALIDATE_TODO
        })
    }

    const deleteTodo = id => {
        dispath({
            type: DELETE_TODO,
            payload: id
        })
    }

    const toggleState = todo => {
        dispath({
            type: TODO_STATE,
            payload: todo
        })
    }

    const actualTodo = todo => {
        dispath({
            type: ACTUAL_TODO,
            payload: todo
        })
    }

    const editTodo = todo => {
        dispath({
            type: EDIT_TODO,
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
                todos: state.todos,
                todosproject: state.todosproject,
                todoerror: state.todoerror,
                todoselected: state.todoselected,
                getTodos,
                addTodo,
                validateTodo,
                deleteTodo,
                toggleState,
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