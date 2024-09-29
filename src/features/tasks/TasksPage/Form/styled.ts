import styled from "styled-components";

export const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileWidth}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.teal};
  padding: 10px;
  border: none;
  transition: 0.3s linear;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(140%);
  }
`;
