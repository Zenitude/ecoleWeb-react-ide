import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
    }
`;

export const HomeContainer = styled.main` 
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 175px 1fr;
`;

export const NavigationContainer = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    border-right: 2px solid #f1f1f1;
    background-color: #333;
    color: #f1f1f1;
`;

export const ViewContainer = styled.div`
    grid-area: 1 / 2 / 3 / 2;
`;
