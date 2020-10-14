import React, { useContext, useEffect } from 'react'
import { Sidebar, Header, TodoForm, TodoList} from 'components'
import { AuthContext } from 'context'

const Projects = () => {

    const authContext = useContext(AuthContext)
    const { getUser } = authContext

    useEffect(() => {
        getUser()
        //eslint-disable-next-line
    },[])

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