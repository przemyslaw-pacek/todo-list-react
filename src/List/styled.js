import styled, { css } from "styled-components";

export const Tasks = styled.ul`
    background: ${({ theme }) => theme.color.white};
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
    border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};

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
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.3s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.green};
    `}

    ${({ deleted }) => deleted && css`
        background: ${({ theme }) => theme.color.red};
    `}

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }
`;