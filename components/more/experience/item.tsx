import styled from "styled-components";
import { Experience } from "../../../data/experience";
import { SlideChild } from "../../slide-in";
import ExperienceItemDetails from "./details";
import ExperienceItemOverview from "./overview";

interface IExperienceItem {
  active: boolean;
  onClick: () => void;
  experience: Experience;
}

const ExperienceItem = ({ active, onClick, experience }: IExperienceItem) => {
  return (
    <ExperienceItemContainer>
      <SlideChild y={50}>
        <Wrapper>
          <Tick>
            <Dot />
          </Tick>
          <Control />
          <Content>
            <ExperienceItemOverview
              experience={experience}
              active={active}
              onClick={onClick}
            />
            <ExperienceItemDetails experience={experience} active={active} />
          </Content>
        </Wrapper>
      </SlideChild>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  position: relative;

  &:last-child > div {
    padding-bottom: 0;
  }

  padding-bottom: 2.5rem;
`;

const ExperienceItemContainer = styled.div`
  font-weight: 300;
  font-size: 13px;
  width: 100%;
  line-height: 27px;
`;

const Content = styled.div`
  width: 100%;
  padding-left: 2rem;

  ${({ theme }) => theme.media.lg} {
    padding-left: 1.5rem;
  }
`;

const Control = styled.div`
  width: 1px;
  background-color: #e9e9e9;
`;

const Tick = styled.div`
  position: absolute;
  top: 10px;
  left: -3px;
  width: 20px;
  height: 40px;
  background-color: #fff;

  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
