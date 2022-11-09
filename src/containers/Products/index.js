import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/shopping.jpg'
import { CardProduct, Header } from '../../components'
import { apiEcommerce } from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container,
    ProductsImg,
    CategoriesMenu,
    CategoryButton,
    ProductsContainer,
} from './styles'

export function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(['all'])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await apiEcommerce.get('products/categories')

            const newCategories = ['all', ...data]

            setCategories(newCategories)
        }
        loadCategories()

        async function loadProducts() {
            const { data: allProducts } = await apiEcommerce.get('products')

            const newProducts = allProducts.map((product) => {
                return {
                    ...product,
                    formatedPrice: formatCurrency(product.price),
                }
            })
            setProducts(newProducts)
        }
        loadProducts()
    }, [])

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, categories, products])

    return (
        <Container>
            <Header />
            <ProductsImg src={ProductsLogo} alt="product page image" />
            <CategoriesMenu>
                {categories &&
                    categories.map((category) => (
                        <CategoryButton
                            type="button"
                            key={category}
                            isActiveCategory={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </CategoryButton>
                    ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
            </ProductsContainer>
        </Container>
    )
}
