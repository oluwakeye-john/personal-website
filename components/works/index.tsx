import styled from "styled-components";
import CustomHeading from "../heading";
import WorksSlide from "./slide";
import WorksTab from "./tab";

const Works = () => {
  return (
    <WorksContainer id="works">
      <CustomHeading
        dark
        title="My Recent Projects"
        description="Welcome to my little corner of the web, where I'll be sharing notes, code snippets, and resources on topics that interest me and updates on projects I'm working on."
      />
      <WorksTab />
      <WorksSlide />
    </WorksContainer>
  );
};

const WorksContainer = styled.div`
  background-color: #000;
`;

export default Works;
