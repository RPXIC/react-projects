import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, Projects } from 'components'
import { ProjectState, TodoState } from 'context'

const App = () => {
  return (
    <ProjectState>
      <TodoState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TodoState>
    </ProjectState>
  )
}

export default App
