import Image from "next/image";
import styled from "styled-components";
import svgs from "../../../assets/svgs/svg";
import { Experience } from "../../../data/experience";

interface IExperienceItemOverview {
  onClick: () => void;
  active: boolean;
  experience: Experience;
}

const ExperienceItemOverview = ({
  onClick,
  active,
  experience,
}: IExperienceItemOverview) => {
  return (
    <ExperienceOverview onClick={onClick}>
      <OverviewTitle>
        {experience.company} - {experience.location}
      </OverviewTitle>
      <OverviewDate>{experience.startDate}</OverviewDate>
      <Arrow active={active}>
        <Image alt="Andela" src={svgs.arrow_down} />
      </Arrow>
    </ExperienceOverview>
  );
};

export default ExperienceItemOverview;

const ExperienceOverview = styled.div`
  width: 100%;

  cursor: pointer;

  font-size: 14px;
  line-height: 27px;

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  background: rgba(9, 9, 9, 0.01);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  width: 100%;

  font-family: ${({ theme }) => theme.fontFamilies.heading};
`;

const OverviewTitle = styled.span`
  font-weight: 400;
`;

const OverviewDate = styled.span`
  font-weight: 300;
  font-size: 13px;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const Arrow = styled.div<{ active?: boolean }>`
  transform: rotate(${({ active }) => (active ? "180deg" : 0)});
  transition: 0.2s;
  ${({ theme }) => theme.media.md} {
    display: none !important;
  }
`;
