import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    color: ${({ theme }) => theme.color.teal};
    background: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.2s;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 15px auto;
        display: grid;
    }

    &:hover {
        color: ${({ theme }) => theme.color.hoverTeal};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.grey};
        cursor: not-allowed;
    }
`;