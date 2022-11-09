import React from 'react'

import HomeLogo from '../../assets/shopping.jpg'
import { Header } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <HomeImg src={HomeLogo} alt="home page image" />
        </Container>
    )
}
