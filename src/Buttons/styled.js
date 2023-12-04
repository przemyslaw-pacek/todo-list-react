import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    color: teal;
    background: white;
    border: none;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        color: rgb(0, 168, 168);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }

    @media(max-width: 767px) {
        margin: 15px auto;
        display: grid;
}
`;