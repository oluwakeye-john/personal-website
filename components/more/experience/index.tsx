import { useState } from "react";
import styled from "styled-components";
import experiences from "../../../data/experience";
import SlideInWrapper from "../../slide-in";
import ExperienceItem from "./item";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ExperienceContainer>
      <SlideInWrapper>
        {experiences.map((experience, i) => (
          <ExperienceItem
            key={i}
            experience={experience}
            active={currentIndex === i}
            onClick={() => {
              setCurrentIndex(i);
            }}
          />
        ))}
      </SlideInWrapper>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  //
`;

export default Experience;
