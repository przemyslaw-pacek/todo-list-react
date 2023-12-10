import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  
  *,
  ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    background: ${({ theme }) => theme.color.lightGrey};
    font-family: 'Montserrat', sans-serif;
    width: 900px;
    max-width: 900px;
    word-break: break-word;
    margin: 20px;
  }
`;
