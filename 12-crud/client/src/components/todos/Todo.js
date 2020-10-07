import React from 'react'

const Todo = ({ todo }) => {

    return (
        <li className="todo shadow">
            <p>{todo.name}</p>
            <div className="state">
                {todo.state
                    ? (
                        <button
                            type="button"
                            className="complete"
                        >Complete</button>
                    )
                    : (
                        <button
                            type="button"
                            className="incomplete"
                        >Incomplete</button>
                    )
                }
            </div>

            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                >Edit</button>
                <button
                    type="button"
                    className="btn btn-secondary"
                >Delete</button>
            </div>
        </li>
    )
}

export default Todo