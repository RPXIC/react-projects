import React, { useContext } from 'react'
import Link from 'next/link'
import { Searcher, Navbar, Button } from 'components'
import { FirebaseContext } from '../../firebase'
import { HeaderContainer, HeaderMain, Logo, FlexRowCenter, Welcome } from './styles'

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
                        <Welcome>Hello: {user.displayName}</Welcome>
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