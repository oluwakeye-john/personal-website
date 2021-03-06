/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Writing } from "../../data/writings";
import LaunchButton from "../launch";
import { SlideChild } from "../slide-in";

interface IWritingItem {
  writing: Writing;
}

const WritingItem = ({ writing }: IWritingItem) => {
  return (
    <Wrapper>
      <SlideChild>
        <Container>
          <div className="img-container">
            <img loading="lazy" alt={writing.title} src={writing.image} />
            <LaunchButton text1="view" text2="story " url={writing.url} />
          </div>
          <Content className="writing-content">
            <Title href={writing.url} rel="noreferrer" target="_blank">
              {writing.title}
            </Title>
            <Text>{writing.description}</Text>
          </Content>
        </Container>
      </SlideChild>
    </Wrapper>
  );
};

export default WritingItem;

const Wrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
    background-color: #000;

    &:hover,
    &:focus,
    &:focus-within {
      .ls {
        transform: scale(1) translateY(0);
        opacity: 1;
      }

      img {
        opacity: 0.5;
        transform: scale(1.2);
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: 1s ease-in-out;
    opacity: 1;
    object-fit: cover;
  }

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 5;

    .img-container {
      height: 740px;
    }

    .writing-content {
      max-width: 70%;
    }

    ${({ theme }) => theme.media.md} {
      grid-template-columns: auto;
      grid-template-rows: unset;

      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;

      .img-container {
        height: 250px;
      }

      .writing-content {
        max-width: 100%;
      }
    }
  }

  &:nth-child(2) {
    grid-column-start: 8;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 3;

    .img-container {
      height: 440px;
    }

    .writing-content {
      max-width: 90%;
    }

    ${({ theme }) => theme.media.md} {
      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;

      .img-container {
        height: 250px;
      }

      .writing-content {
        max-width: 100%;
      }
    }
  }

  &:nth-child(3) {
    grid-column-start: 8;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: 5;

    .img-container {
      height: 250px;
    }

    .writing-content {
      max-width: 90%;
    }

    ${({ theme }) => theme.media.md} {
      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;

      .img-container {
        height: 250px;
      }

      .writing-content {
        max-width: 100%;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;

  img {
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1rem 2rem;

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
  font-size: 13px;
  line-height: 140.5%;

  color: ${({ theme }) => theme.colors.lightText};
`;
