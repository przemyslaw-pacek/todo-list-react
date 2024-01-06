import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    font-size: 13.3px;
    padding: 3.2px 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileWidth}px) {
        grid-template-columns: auto;
    }
`;