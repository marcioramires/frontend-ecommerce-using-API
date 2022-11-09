import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import { Container, ContainerLeft, ContainerRight, PageLink } from './styles'

export function Header() {
    const {
        push,
        location: { pathname },
    } = useHistory()

    return (
        <Container>
            <ContainerLeft>
                <p>Welcome To Our Store!</p>
                <PageLink
                    onClick={() => push('/products')}
                    isActive={pathname.includes('products')}
                >
                    See Products
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <div></div>
                <PageLink
                    onClick={() => push('cart')}
                    isActive={pathname.includes('cart')}
                >
                    <img src={Cart} alt="cart image" />
                </PageLink>
            </ContainerRight>
        </Container>
    )
}
