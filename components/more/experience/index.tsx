import { useState } from "react";
import styled from "styled-components";
import experiences from "../../../data/experience";
import ExperienceItem from "./item";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ExperienceContainer>
      {experiences.map((experience, i) => (
        <ExperienceItem
          experience={experience}
          key={i}
          active={currentIndex === i}
          onClick={() => {
            setCurrentIndex(i);
          }}
        />
      ))}
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  //
`;

export default Experience;
