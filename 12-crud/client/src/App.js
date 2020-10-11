import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, Projects } from 'components'
import { ProjectState, TodoState, AlertState, AuthState } from 'context'

const App = () => {
  return (
    <ProjectState>
      <TodoState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TodoState>
    </ProjectState>
  )
}

export default App
