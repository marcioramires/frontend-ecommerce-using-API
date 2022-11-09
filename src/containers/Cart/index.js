import React from 'react'

import CartLogo from '../../assets/shopping.jpg'
import { CartItems, CartResume, Header } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <Header />
            <CartImg src={CartLogo} alt="cart page image" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}
