import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #ffffff;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerLeft = styled.div`
    display: flex;
    align-content: left;
    gap: 50px;

    p {
        @media (max-width: 480px) {
            display: none;
        }
    }
`

export const ContainerRight = styled.div`
    display: flex;

    p {
        color: #9758a6;
        padding-left: 10px;
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => (props.isActive ? '#9758A6' : '#555555')};
    font-size: 16px;
    line-height: 19px;
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
    border-bottom: ${(props) =>
        props.isActive ? '2px solid #9758A6' : 'none'};
`
