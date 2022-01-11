import styled from "styled-components";
import WorksHeading from "./heading";
import WorksSlide from "./slide";
import WorksTab from "./tab";

const Works = () => {
  return (
    <WorksContainer>
      <WorksHeading />
      <WorksTab />
      <WorksSlide />
    </WorksContainer>
  );
};

const WorksContainer = styled.div`
  background-color: #000;
`;

export default Works;
