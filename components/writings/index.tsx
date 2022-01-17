import styled from "styled-components";
import writings from "../../data/writings";
import { Container1 } from "../container";
import CustomHeading from "../heading";
import SlideInWrapper from "../slide-in";
import WritingItem from "./item";

const RecentWritings = () => {
  return (
    <SlideInWrapper>
      <WritingsContainer>
        <CustomHeading
          title="My Recent Writings"
          description="Writing is not just the technical act of your fingers on the keyboard. Writing is living. - Melissa Marr"
        />

        <SlideInWrapper>
          <WritingsContent>
            {writings.map((writing, index) => (
              <WritingItem writing={writing} key={index} />
            ))}
          </WritingsContent>
        </SlideInWrapper>
      </WritingsContainer>
    </SlideInWrapper>
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

  column-gap: 1.3rem;
  row-gap: 2rem;

  padding-top: 2rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin-top: 2rem;
    row-gap: 3rem;
  }

  ${Container1}
`;
