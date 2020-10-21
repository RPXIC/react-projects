import Link from 'next/link'
import { Nav } from './styles'

const Navbar = () => {
    return (
        <Nav>
            <Link href="/">Home</Link>
            <Link href="/trendings">Trendings</Link>
            <Link href="/new-product">New product</Link>
        </Nav>
    )
}
export default Navbar