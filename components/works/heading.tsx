import styled from "styled-components";
import { Container1, Container5 } from "../container";
import Quote from "../quote";

const WorksHeading = () => {
  return (
    <WorksTitleContainer>
      <WorksTitleContent>
        <WorksText>
          My Recent
          <br />
          Works
        </WorksText>
        <WorkQuote>
          <Quote
            dark
            extend={false}
            text="Welcome to my little corner of the web, where I'll be sharing notes,
            code snippets, and resources on topics that interest me and updates
            on projects I'm working on."
          />
        </WorkQuote>
      </WorksTitleContent>
    </WorksTitleContainer>
  );
};

const WorksTitleContainer = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 5rem;
    padding-bottom: 0;
  }
`;

const WorksText = styled.h3`
  color: #fff;
  font-weight: 300;
  font-size: 80px;
  line-height: 96.5%;
  margin: 0;

  margin-bottom: 0rem;
  padding-right: 2.1rem;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 0;
    font-size: 60px;
    line-height: 96.5%;
  }
`;

const WorksTitleContent = styled.div`
  display: flex;
  align-items: flex-end;
  ${Container5}
`;

const WorkQuote = styled.div`
  display: block;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export default WorksHeading;
