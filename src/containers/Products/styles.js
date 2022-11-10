import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
`

export const ProductsImg = styled.img`
    width: 100%;
    @media (max-width: 480px) {
        display: none;
    }
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
    @media (max-width: 670px) {
        gap: 10px;
    }
    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${(props) =>
        props.isActiveCategory ? '2px solid #9758A6' : 'none'};
    color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 40px 80px;
    margin-top: 20px;
    justify-content: center;
`
