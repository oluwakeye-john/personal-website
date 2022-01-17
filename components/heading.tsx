import styled from "styled-components";
import { Container5 } from "./container";
import Quote from "./quote";
import SlideInWrapper, { SlideChild } from "./slide-in";
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
        <TextWrapper>
          <SlideChild stiffness={50}>
            <Text dark={dark}>{title}</Text>
          </SlideChild>
        </TextWrapper>
        <QuoteWrapper>
          <SlideChild stiffness={50}>
            <Quote dark={dark} extend={false} text={description} />
          </SlideChild>
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

const TextWrapper = styled.div`
  max-width: 40%;
  padding-right: 2.1rem;

  ${({ theme }) => theme.media.lg} {
    max-width: unset;
  }
`;

const Text = styled.h3<{ dark?: boolean }>`
  ${SectionHeading};
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
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
