/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import styled from "styled-components";
import { Writing } from "../../data/writings";

interface IWritingItem {
  writing: Writing;
}

const WritingItem = ({ writing }: IWritingItem) => {
  return (
    <Wrapper>
      <Container>
        <a href={writing.url} rel="noreferrer" target="_blank">
          <img alt="Omoo" src={writing.image} />
        </a>
        <Content>
          <Title href={writing.url} rel="noreferrer" target="_blank">
            {writing.title}
          </Title>
          <Text>{writing.description}</Text>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default WritingItem;

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: auto;
    grid-template-rows: unset;

    grid-column-start: unset;
    grid-column-end: unset;
    grid-row-start: unset;
    grid-row-end: unset;
  }

  img {
    height: 740px;
    width: 100%;
    object-fit: cover;

    ${({ theme }) => theme.media.md} {
      height: 450px;
    }
  }

  &:nth-child(2) {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 3;

    ${({ theme }) => theme.media.md} {
      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;
    }

    img {
      width: 100%;
      height: 450px;
    }
  }

  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 5;

    ${({ theme }) => theme.media.md} {
      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;
    }

    img {
      width: 100%;
      height: 290px;

      ${({ theme }) => theme.media.md} {
        height: 450px;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 1rem 2rem;
  max-width: 70%;

  ${({ theme }) => theme.media.md} {
    max-width: 100%;
    padding: 1rem 0;
  }
`;

const Title = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: bold;
  font-size: 20px;
  line-height: 114%;
  letter-spacing: -0.1em;
  margin: 1rem 0;

  text-decoration: none;
  color: inherit;
`;

const Text = styled.p`
  margin: 0;

  font-weight: 300;
  font-size: 14px;
  line-height: 140.5%;

  color: ${({ theme }) => theme.colors.lightText};
`;
