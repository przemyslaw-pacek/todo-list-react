import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
    ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    background: ${({ theme }) => theme.color.lightGrey};
    font-family: 'Montserrat', sans-serif;
    word-break: break-all;
  }
`;
