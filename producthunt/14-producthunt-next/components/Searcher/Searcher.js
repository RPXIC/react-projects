import { InputText, InputSubmit, Form } from './styles'

const Searcher = () => {
    return ( 
        <Form>
            <InputText type="text" placeholder="Search products" />
            <InputSubmit type="submit">Search</InputSubmit>
        </Form>
    )
}
export default Searcher