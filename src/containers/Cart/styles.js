import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
`

export const CartImg = styled.img`
    width: 100%;
    @media (max-width: 480px) {
        display: none;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;

    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    @media (max-width: 670px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 30px;
    }
`
