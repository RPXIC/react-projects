import React, { useState, useEffect } from 'react'
import { Question, Form, List, BudgetControl } from 'components'

const App = () => {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [spending, setSpending] = useState({})
  const [createSpending, setCreateSpending] = useState(false)

  useEffect(() => {
    if (createSpending) {
      setExpenses([
        ...expenses,
        spending
      ])
      setCreateSpending(false)

      const remainingBudget = remaining - spending.quantity;

      setRemaining(remainingBudget)

      setCreateSpending(false)
    }
  }, [createSpending, expenses, remaining, spending])

  return (
    <div className="container">
      <header>
        <h1>Weekly expense</h1>
        <div className="main-content content">
          {showQuestion ?
            (
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form setSpending={setSpending} setCreateSpending={setCreateSpending} />
                </div>
                <div className="one-half column">
                  <List expenses={expenses} />
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  )
}

export default App
