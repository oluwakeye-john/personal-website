import Image from "next/image";
import styled from "styled-components";
import svgs from "../../../assets/svgs/svg";
import { Interest } from "../../../data/interests";
import { SlideChild } from "../../slide-in";

interface IInterestItem {
  interest: Interest;
}

const InterestItem = ({ interest }: IInterestItem) => {
  return (
    <SlideChild y={50}>
      <ItemContainer>
        <Image alt="pizza" src={svgs.pizza} />
        <Content>
          <Title>{interest.key}</Title>
          <Text>{interest.value}</Text>
        </Content>
      </ItemContainer>
    </SlideChild>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
`;

const Content = styled.div``;

const Title = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 111%;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  /* text-transform: lowercase; */
  display: block;
  padding-top: 1rem;
`;

const Text = styled.span`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  display: block;
  padding-top: 0.5rem;
`;

export default InterestItem;
