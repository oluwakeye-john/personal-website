import styled from "styled-components";
import interests from "../../../data/interests";
import SlideInWrapper from "../../slide-in";
import InterestItem from "./item";

const Interests = () => {
  return (
    <SlideInWrapper stagger={0.05}>
      <InterestsContainer>
        {interests.map((interest, index) => (
          <InterestItem interest={interest} key={index} />
        ))}
      </InterestsContainer>
    </SlideInWrapper>
  );
};

const InterestsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  gap: 1.3rem;

  ${({ theme }) => theme.media.md} {
    padding-top: 3rem;
    grid-template-columns: auto auto auto;
  }
`;

export default Interests;
