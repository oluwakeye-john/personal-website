import styled from "styled-components";
import awards from "../../../data/awards";
import AwardItem from "./item";

const Awards = () => {
  return (
    <AwardsContainer>
      {awards.map((award, index) => (
        <AwardItem award={award} key={index} />
      ))}
    </AwardsContainer>
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
