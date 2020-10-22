import React, { useContext } from 'react'
import Link from 'next/link'
import { Searcher, Navbar, Button } from 'components'
import { HeaderContainer, HeaderMain, Logo, FlexRowCenter } from './styles'
import { FirebaseContext } from '../../firebase'

const Header = () => {

    const { user, firebase } = useContext(FirebaseContext)

    return ( 
        <HeaderMain>
            <HeaderContainer>
                <FlexRowCenter>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    <Searcher />
                    <Navbar />
                </FlexRowCenter>

                <FlexRowCenter>
                { user ? (
                    <>
                        <p>Hello: {user.displayName}</p>
                        <Button 
                            bgColor={true} 
                            onClick={() => firebase.logout()}
                        >Logout</Button>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <Button bgColor={true}>Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Register</Button>
                        </Link>
                    </>
                )}
                </FlexRowCenter>
            </HeaderContainer>
        </HeaderMain>
    )
}
export default Header