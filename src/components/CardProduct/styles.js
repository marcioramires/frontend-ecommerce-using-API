import styled from 'styled-components'

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 15px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: 420px;
    height: 182px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const DivImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
`

export const Image = styled.img`
    max-width: 150px;
    max-height: 150px;
    width: auto;
    height: auto;
    border-radius: 10px;
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
`
