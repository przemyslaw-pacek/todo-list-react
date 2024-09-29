import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const List = styled.ul`
  background: ${({ theme }) => theme.color.teal};
  list-style: none;
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  justify-content: center;
  padding: 20px;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;
