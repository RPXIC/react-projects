import React from 'react'
import { Sidebar, Header, TodoForm, TodoList} from 'components'

const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar />

            <div className="main-section">

                <Header />

                <main>

                    <TodoForm />

                    <div className="todo-container">
                        <TodoList />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects