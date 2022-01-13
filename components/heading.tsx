import styled from "styled-components";
import { Container5 } from "./container";
import Quote from "./quote";
import { SectionHeading } from "./text";

interface ICustomHeading {
  title: string;
  description: string;
  dark?: boolean;
}

const CustomHeading = ({ title, description, dark }: ICustomHeading) => {
  return (
    <Container>
      <Content>
        <Text dark={dark}>{title}</Text>
        <QuoteWrapper>
          <Quote dark={dark} extend={false} text={description} />
        </QuoteWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 5rem;
    padding-bottom: 0;
  }
`;

const Text = styled.h3<{ dark?: boolean }>`
  ${SectionHeading};
  max-width: 40%;
  padding-right: 2.1rem;
  color: ${({ dark }) => (dark ? "#fff" : "#000")};

  ${({ theme }) => theme.media.lg} {
    max-width: unset;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  ${Container5}
`;

const QuoteWrapper = styled.div`
  display: block;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export default CustomHeading;
