import styled from "styled-components";

export default styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileWidth}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.hoverTeal};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.grey};
    cursor: not-allowed;
  }
`;
