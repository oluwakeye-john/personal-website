import styled from "styled-components";
import { Experience } from "../../../data/experience";
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
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;

const ExperienceItemContainer = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 27px;

  display: flex;
  position: relative;

  &:last-child > div {
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-left: 2rem;

  padding-bottom: 2.5rem;

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
