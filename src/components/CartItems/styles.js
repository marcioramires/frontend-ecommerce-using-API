import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;

    p {
        font-size: 16px;
        color: #b5b5b5;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    min-width: 80px;
    grid-gap: 10px 15px;

    img {
        border-radius: 10px;
        max-width: 80px;
        max-height: 80px;
        width: auto;
        height: auto;
    }

    p {
        font-size: 16px;
        color: #000000;
        width: 180px;
    }

    .quantity-container {
        display: flex;
        gap: 10px;
        width: 30px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        P {
            margin-top: 5px;
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
