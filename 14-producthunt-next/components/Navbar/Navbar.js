import { useContext } from 'react'
import Link from 'next/link'
import { FirebaseContext } from '../../firebase'
import { Nav } from './styles'

const Navbar = () => {
    const { user } = useContext(FirebaseContext)

    return (
        <Nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/trendings">
                <a>Trendings</a>
            </Link>
            {user && <Link href="/new-product"><a>New product</a></Link>}
        </Nav>
    )
}

export default Navbar