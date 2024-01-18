import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    list-style-type: none;

    &.active {
        font-weight: bold;
    }
`;