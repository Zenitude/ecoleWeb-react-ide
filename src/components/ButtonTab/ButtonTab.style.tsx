import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 50px 1fr;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: none;
    color: #f1f1f1;

    img{
        width: 30px;
        height: 30px;
        margin: auto;
    }

    span {
        flex-grow: 1;
    }
`;