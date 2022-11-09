import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'

export const AppProvider = ({ children }) => (
    <CartProvider>{children}</CartProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node,
}
