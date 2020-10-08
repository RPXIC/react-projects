import { TODOS_PROJECT, ADD_TODO, VALIDATE_TODO, DELETE_TODO, TODO_STATE, ACTUAL_TODO, EDIT_TODO, CLEAN_TODO } from 'types'

export default (state, action) => {
    switch (action.type) {
        case TODOS_PROJECT:
            return {
                ...state,
                todosproject: state.todos.filter(todo => todo.projectId === action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                todoerror: false
            }
        case VALIDATE_TODO:
            return {
                ...state,
                todoerror: true
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case EDIT_TODO:
        case TODO_STATE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        case ACTUAL_TODO:
            return {
                ...state,
                todoselected: action.payload
            }
        case CLEAN_TODO:
            return {
                ...state,
                todoselected: null
            }
        default:
            return state
    }
}