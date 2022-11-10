import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
    const { cartProducts, addProducts, removeProducts } = useCart()
    return (
        <Container>
            <Header>
                <p></p>
                <p>Items</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                    <Body key={product.id}>
                        <div className="image-container">
                            <img src={product.image} />
                        </div>
                        <p>{product.title}</p>
                        <p className="price">{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={() => removeProducts(product)}>
                                -
                            </button>
                            <p>{product.quantity}</p>
                            <button onClick={() => addProducts(product)}>
                                +
                            </button>
                        </div>
                        <p>
                            {formatCurrency(product.quantity * product.price)}
                        </p>
                    </Body>
                ))
            ) : (
                <EmptyCart>Empty Cart</EmptyCart>
            )}
        </Container>
    )
}
