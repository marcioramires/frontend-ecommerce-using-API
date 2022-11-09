import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../'
import { useCart } from '../../hooks/CartContext'
import { ProductName, ProductPrice, Container, Image, DivImage } from './styles'

export function CardProduct({ product }) {
    const { putProductsInCart } = useCart()
    return (
        <Container>
            <DivImage>
                <Image src={product.image} alt="product image" />
            </DivImage>
            <div>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductsInCart(product)}>
                    Add to cart
                </Button>
            </div>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}
