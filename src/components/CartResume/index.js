import React, { useState, useEffect } from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [finalItems, setFinalItems] = useState(0)

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)

        const sumQuantityItems = cartProducts.reduce((acc, current) => {
            return current.quantity + acc
        }, 0)

        setFinalItems(sumQuantityItems)
    }, [cartProducts])

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Order Resume</h2>
                    <p className="items">Total Items</p>
                    <p className="total-items">{finalItems}</p>
                </div>
                <div className="container-bottom">
                    <p>Total Price</p>
                    <p>{formatCurrency(finalPrice)}</p>
                </div>
            </Container>
            <Button style={{ width: '250px', marginTop: '30px' }}>
                Confirm Order
            </Button>
        </div>
    )
}
