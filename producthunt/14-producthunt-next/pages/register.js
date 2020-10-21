import { Form, Container, InputSubmit, H1, Error } from 'components/ui/Form'
import useValidation from 'hooks/useValidation'
import validateRegister from 'utils/validate'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {

  const register = () => console.log('register')
  
  const { values ,errors, handleSubmit, handleChange, handleBlur } = useValidation(INITIAL_STATE, validateRegister, register)
  
  const { name, email, password } = values

  return (
    <div>
      <H1>Register</H1>

      <Form onSubmit={handleSubmit} noValidate>
        <Container>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Container>

        {errors.name && <Error>{errors.name}</Error>}

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

        <InputSubmit type="submit" value="Register" />
      </Form>
    </div>
  )
}

export default Register