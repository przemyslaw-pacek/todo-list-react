import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  margin: 10px 0;
`;

export const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileWidth}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Body = styled.div`
  text-align: justify;
  padding: 20px;
`;
