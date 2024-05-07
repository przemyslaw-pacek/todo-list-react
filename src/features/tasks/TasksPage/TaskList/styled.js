import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const Tasks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li` 
    border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const ContentNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.teal};
    text-decoration: none;

    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
  
    &:hover {
        color: ${({ theme }) => theme.color.hoverTeal};
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.3s;
    cursor: pointer;

    ${({ $toggleDone }) => $toggleDone && css`
        background: ${({ theme }) => theme.color.green};
    `}

    ${({ $deleted }) => $deleted && css`
        background: ${({ theme }) => theme.color.red};
    `}

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }
`;