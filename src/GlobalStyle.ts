import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    width: ${({ theme }) => theme.spaces.maxContentWidth}px;
    justify-content: center;
}

h1,h2,h3,h4,h5 {
    margin: 0;
}
`;
