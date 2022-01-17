import styled from "styled-components";
import courses from "../../../data/course";
import SlideInWrapper from "../../slide-in";
import CourseItem from "./item";

const Courses = () => {
  return (
    <SlideInWrapper stagger={0.2}>
      <CoursesContainer>
        {courses.map((course, index) => (
          <CourseItem course={course} key={index} />
        ))}
      </CoursesContainer>
    </SlideInWrapper>
  );
};

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: auto;
  }
`;

export default Courses;
