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
  display: flex;
  flex-wrap: wrap;

  gap: 1.7rem;

  ${({ theme }) => theme.media.md} {
    padding-top: 2rem;
  }
`;

export default Courses;
