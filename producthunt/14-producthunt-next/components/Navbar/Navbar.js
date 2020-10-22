import { useContext } from 'react'
import Link from 'next/link'
import { Nav } from './styles'
import { FirebaseContext } from '../../firebase'

const Navbar = () => {

    const { user } = useContext(FirebaseContext)

    return (
        <Nav>
            <Link href="/">Home</Link>
            <Link href="/trendings">Trendings</Link>
            {user && <Link href="/new-product">New product</Link>}
        </Nav>
    )
}
export default Navbar