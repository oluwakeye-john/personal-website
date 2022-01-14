import styled from "styled-components";
import { Experience } from "../../../data/experience";

interface ExperienceItemDetails {
  active: boolean;
  experience: Experience;
}

const ExperienceItemDetails = ({
  experience,
  active,
}: ExperienceItemDetails) => {
  return (
    <ExperienceDetailsContainer active={active}>
      <Duration>
        <Sp>
          {experience.startDate} - {experience.endDate}
        </Sp>
      </Duration>
      <Content>
        <DetailTitle>{experience.position}</DetailTitle>
        <DetailSubtitle>
          {experience.company} - {experience.location}
        </DetailSubtitle>
        <DetailDescription>{experience.description}</DetailDescription>
      </Content>
    </ExperienceDetailsContainer>
  );
};

export default ExperienceItemDetails;

const ExperienceDetailsContainer = styled.div<{ active: boolean }>`
  padding-top: 1rem;

  font-weight: 400;
  font-size: 13px;
  line-height: 27px;

  display: flex;

  transition: 0.7s ease-in-out;

  max-height: ${({ active }) => (active ? "500px" : 0)};
  opacity: ${({ active }) => (active ? 1 : 0)};
  overflow: ${({ active }) => (active ? "auto" : "hidden")};
`;

const DetailTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const Duration = styled.div`
  width: 0;
  padding: 0 1.7rem;

  ${({ theme }) => theme.media.md} {
    padding-left: 0;
    margin-left: 5px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sp = styled.div`
  transform: rotate(-90deg);
  white-space: nowrap;

  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.primary};

  letter-spacing: 0.205em;
  text-transform: uppercase;
`;

const Content = styled.div`
  overflow: hidden;
`;

const DetailSubtitle = styled.p`
  //
`;

const DetailDescription = styled.p`
  font-weight: 300;
  line-height: 23.5px;
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
`;
