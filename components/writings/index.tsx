import styled from "styled-components";
import writings from "../../data/writings";
import { Container1 } from "../container";
import CustomHeading from "../heading";
import WritingItem from "./item";

const RecentWritings = () => {
  return (
    <WritingsContainer>
      <CustomHeading
        title="My Recent Writings"
        description="Welcome to my little corner of the web, where I'll be sharing notes, code snippets, and resources on topics that interest me and updates on projects I'm working on."
      />
      <WritingsContent>
        {writings.map((writing, index) => (
          <WritingItem writing={writing} key={index} />
        ))}
      </WritingsContent>
    </WritingsContainer>
  );
};

export default RecentWritings;

const WritingsContainer = styled.div`
  background: #f9f9f9;
  padding-bottom: 3rem;
`;

const WritingsContent = styled.div`
  display: grid;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  column-gap: 1.3rem;
  row-gap: 2rem;

  padding-top: 2rem;

  ${Container1}
`;
