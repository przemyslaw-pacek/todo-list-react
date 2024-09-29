import { ReactNode } from "react";
import { Wrapper, Header, Body, Title } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </Wrapper>
);

export default Section;
