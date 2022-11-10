import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas:
            'title title'
            'items items-price';

        .title {
            grid-area: title;
            margin-bottom: 20px;
            text-align: center;
        }

        .items {
            grid-area: items;
        }

        .total-items {
            grid-area: items-price;
        }
    }

    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 18px;
        margin-top: 50px;
    }
`
