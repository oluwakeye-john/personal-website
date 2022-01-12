import styled from "styled-components";
import InterestItem from "./item";

const Interests = () => {
  return (
    <InterestsContainer>
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
      <InterestItem />
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
