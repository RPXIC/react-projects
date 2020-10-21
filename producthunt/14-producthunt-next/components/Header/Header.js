import React from 'react'
import Link from 'next/link'
import { Searcher, Navbar, Button } from 'components'
import { HeaderContainer, HeaderMain, Logo, FlexRowCenter } from './styles'

const Header = () => {

    const user = false

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
                        <p>Hello: World</p>
                        <Button bgColor={true}>Logout</Button>
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