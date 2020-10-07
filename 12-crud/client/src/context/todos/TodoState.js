import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { TODOS_PROJECT } from 'types'

const TodoState = props => {
    const initialState = {
        todos: [
            { name: 'choose platform', state: true, projectId: 1 },
            { name: 'choose colors', state: false, projectId: 2 },
            { name: 'choose platform pay', state: false, projectId: 3 },
            { name: 'choose hosting', state: true, projectId: 4 },
            { name: 'choose platform', state: true, projectId: 1 },
            { name: 'choose colors', state: false, projectId: 2 },
            { name: 'choose platform pay', state: false, projectId: 3 },
            { name: 'choose platform', state: true, projectId: 4 },
            { name: 'choose colors', state: false, projectId: 1 },
            { name: 'choose platform pay', state: false, projectId: 2 },
            { name: 'choose platform', state: true, projectId: 3 },
            { name: 'choose colors', state: false, projectId: 4 },
            { name: 'choose platform pay', state: false, projectId: 3 }
        ],
        todosproject: null
    }

    const [state, dispath] = useReducer(TodoReducer, initialState)

    const getTodos = projectId => {
        dispath({
            type: TODOS_PROJECT,
            payload: projectId
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                todosproject: state.todosproject,
                getTodos
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState