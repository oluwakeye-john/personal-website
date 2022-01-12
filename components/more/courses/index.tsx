import styled from "styled-components";
import courses from "../../../data/course";
import CourseItem from "./item";

const Courses = () => {
  return (
    <CoursesContainer>
      {courses.map((course, index) => (
        <CourseItem course={course} key={index} />
      ))}
    </CoursesContainer>
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
