import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async (products) => {
        await localStorage.setItem(
            'ecommerce:cartInfo',
            JSON.stringify(products)
        )
    }

    const putProductsInCart = async (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity += 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        await updateLocalStorage(newCartProducts)
    }
    const deleteProducts = async (productId) => {
        const newCart = cartProducts.filter(
            (product) => product.id !== productId.id
        )
        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    const addProducts = async (productId) => {
        const newCart = cartProducts.map((product) => {
            return product.id === productId.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        })
        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    const removeProducts = async (productId) => {
        const cartIndex = cartProducts.findIndex((pd) => pd.id === productId.id)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((product) => {
                return product.id === productId.id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            })

            setCartProducts(newCart)

            await updateLocalStorage(newCart)
        } else {
            deleteProducts(productId)
        }
    }

    useEffect(() => {
        const loadCartData = async () => {
            const clientCardData = await localStorage.getItem(
                'ecommerce:cartInfo'
            )

            if (clientCardData) {
                setCartProducts(JSON.parse(clientCardData))
            }
        }
        loadCartData()
    }, [])
    return (
        <CartContext.Provider
            value={{
                putProductsInCart,
                cartProducts,
                addProducts,
                removeProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with UserContext')
    }
    return context
}

CartProvider.propTypes = {
    children: PropTypes.node,
}
