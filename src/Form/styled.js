import styled from "styled-components";

export const FormField = styled.form`
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 20px;
    background: ${({ theme }) => theme.color.white};
    padding: 20px;
    margin: 2.6px 0 10px;

    @media (max-width: 767px) {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr;
    }
`;

export const Input = styled.input`
    border: 2px solid #eee;
    background: ${({ theme }) => theme.color.white};
    padding: 10px;
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    border: none;
    background: ${({ theme }) => theme.color.teal};
    transition: 0.2s linear;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(140%);
    }
`;