import styled from "styled-components";
import awards from "../../../data/awards";
import SlideInWrapper from "../../slide-in";
import AwardItem from "./item";

const Awards = () => {
  return (
    <SlideInWrapper stagger={0.1}>
      <AwardsContainer>
        {awards.map((award, index) => (
          <AwardItem award={award} key={index} />
        ))}
      </AwardsContainer>
    </SlideInWrapper>
  );
};

export default Awards;

const AwardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: auto auto;
  }
`;
