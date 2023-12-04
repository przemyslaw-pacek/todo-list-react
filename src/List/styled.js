import styled, { css } from "styled-components";

export const Tasks = styled.ul`
    background: white;
    min-height: 60px;
    padding: 10px;
    margin: 2.3px 0 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px;
    margin: 25px 10px 10px;
    list-style-type: none;
    border-bottom: 2px solid #eee;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    background: green;
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: rgb(0, 148, 0);
    }

    &:active {
        background: rgb(0, 168, 0);
    }

    ${({ deleted }) => deleted && css`
        justify-self: end;
        background: red;

        &:hover {
            background: rgb(255, 60, 60);
        }

        &:active {
            background: rgb(255, 120, 120);
        }
    `}
`;