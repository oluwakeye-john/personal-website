import styled from "styled-components";
import { Award } from "../../../data/awards";

interface IAwardItem {
  award: Award;
}

const AwardItem = ({ award }: IAwardItem) => {
  return (
    <ItemContainer>
      <ItemImage />
      <ItemContent>
        <ItemTitle>{award.title}</ItemTitle>
        <ItemText>{award.date}</ItemText>
      </ItemContent>
    </ItemContainer>
  );
};

export default AwardItem;

const ItemContainer = styled.div`
  border: 1px solid #000000;

  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemImage = styled.div`
  background-color: red;
  height: 80px;
  width: 65px;

  margin: 0 auto;
`;

const ItemContent = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ItemTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  text-transform: lowercase;

  display: block;

  ${({ theme }) => theme.media.md} {
    font-size: 16px;
  }
`;

const ItemText = styled.span`
  display: block;
  margin-top: 5px;

  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
`;
