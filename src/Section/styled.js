import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    font-size: 13.3px;
    padding: 3.2px 20px;

    @media(max-width: 767px) {
        grid-template-columns: auto;
    }
`;