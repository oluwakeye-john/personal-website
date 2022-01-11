/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

interface IText {
  text: string;
  dark?: boolean;
  extend?: boolean;
}

const Quote = ({ text, dark, extend = true }: IText) => {
  return (
    <QuoteContainer>
      <QuoteText extend={extend} dark={dark}>
        {text}
      </QuoteText>
    </QuoteContainer>
  );
};

export default Quote;

const QuoteContainer = styled.div`
  margin-left: 1rem;
  width: 390px;

  ${({ theme }) => theme.media.lg} {
    margin-left: 0;
  }

  ${({ theme }) => theme.media.md} {
    width: 100%;
  }
`;

const QuoteText = styled.div<{ dark?: boolean; extend?: boolean }>`
  padding: 3px;
  padding-left: 0.8rem;
  padding-bottom: ${({ extend }) => (extend ? "8px" : 0)};

  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme, dark }) =>
    dark ? "rgba(255, 255, 255, 0.8)" : theme.colors.lightText};

  font-weight: 300;
  font-size: 14px;
  line-height: 140.5%;
`;
