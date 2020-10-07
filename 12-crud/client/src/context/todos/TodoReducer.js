import { TODOS_PROJECT } from 'types'


export default (state, action) => {
    switch (action.type) {
        case TODOS_PROJECT:
            return {
                ...state,
                todosproject: state.todos.filter(todo => todo.projectId === action.payload)
            }

        default:
            return state
    }
}