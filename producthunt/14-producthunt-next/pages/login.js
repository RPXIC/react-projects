import { useState } from 'react'
import Router from 'next/router'
import firebase from '../firebase'
import { Form, Container, InputSubmit, H1, Error } from 'components/ui/Form'
import useValidation from 'hooks/useValidation'
import validateLogin from 'utils/validateLogin'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {

  const [error, setError] = useState(false)

  const login = async() => {
    try {
      await firebase.login(email, password)
      Router.push('/')
    } catch (error) {
      console.error('Login error', error.message)
      setError(error.message)
    }
  }
  
  const { values ,errors, handleSubmit, handleChange, handleBlur } = useValidation(INITIAL_STATE, validateLogin, login)
  
  const { email, password } = values

  return (
    <div>
      <H1>Login</H1>

      <Form onSubmit={handleSubmit} noValidate>

        <Container>
          <label htmlFor="name">Email</label>
          <input 
            type="email"
            id="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Container>

        {errors.email && <Error>{errors.email}</Error>}

        <Container>
          <label htmlFor="name">Password</label>
          <input 
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Container>

        {errors.password && <Error>{errors.password}</Error>}
        {error && <Error>{error}</Error>}

        <InputSubmit type="submit" value="Login" />
      </Form>
    </div>
  )
}

export default Login