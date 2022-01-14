import styled from "styled-components";
import interests from "../../../data/interests";
import InterestItem from "./item";

const Interests = () => {
  return (
    <InterestsContainer>
      {interests.map((interest, index) => (
        <InterestItem interest={interest} key={index} />
      ))}
    </InterestsContainer>
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
