import React, { useState } from 'react'
import { Header, Form, Resume, Result, Spinner } from 'components'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

const App = () => {
  const [resume, setResume] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      coverage: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const { quotation, data } = resume

  return (
    <Container>
      <Header title="Insurance Calculator" />
      <FormContainer>
        <Form
          setResume={setResume}
          setLoading={setLoading}
        />
        {loading ? <Spinner /> : null}
        <Resume
          data={data}
        />
        {!loading
          ? <Result
            quotation={quotation}
          />
          : null
        }
      </FormContainer>
    </Container>
  )
}

export default App
