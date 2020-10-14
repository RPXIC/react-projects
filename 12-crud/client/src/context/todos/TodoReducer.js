import { TODOS_PROJECT, ADD_TODO, VALIDATE_TODO, DELETE_TODO, ACTUAL_TODO, EDIT_TODO, CLEAN_TODO } from 'types'

export default (state, action) => {
    switch (action.type) {
        case TODOS_PROJECT:
            return {
                ...state,
                todosproject: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todosproject: [ ...state.todosproject, action.payload ],
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
                todosproject: state.todosproject.filter(todo => todo._id !== action.payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todosproject: state.todosproject.map(todo => todo._id === action.payload._id ? action.payload : todo)
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