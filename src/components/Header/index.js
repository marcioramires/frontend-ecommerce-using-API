import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import { useCart } from '../../hooks/CartContext'
import { Container, ContainerLeft, ContainerRight, PageLink } from './styles'

export function Header() {
    const {
        push,
        location: { pathname },
    } = useHistory()

    const { cartProducts } = useCart()
    const [finaItems, setFinalItems] = useState(0)

    useEffect(() => {
        const sumItems = cartProducts.reduce((acc, current) => {
            return current.quantity + acc
        }, 0)

        setFinalItems(sumItems)
    }, [cartProducts])

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
                <PageLink
                    onClick={() => push('cart')}
                    isActive={pathname.includes('cart')}
                >
                    <img src={Cart} alt="cart image" />
                </PageLink>
                <p> ({finaItems} items) </p>
            </ContainerRight>
        </Container>
    )
}
