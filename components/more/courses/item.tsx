/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Course } from "../../../data/course";
import { CoursesPattern1, CoursesPattern2 } from "./icons";

interface ICourseItem {
  course: Course;
}

const CourseItem = ({ course }: ICourseItem) => {
  return (
    <CourseContainer color={course.bgColor}>
      <Content>
        <Issuer>
          <img alt={course.issuer} src={course.logo} />
        </Issuer>
        <div>
          <CourseName>{course.courseName}</CourseName>
          <CourseDate>{course.date}</CourseDate>
        </div>
      </Content>
      <CenterPattern>
        <CoursesPattern1 color={course.lineColor} />
      </CenterPattern>
      <LeftPattern>
        <CoursesPattern2 color={course.hubColor} />
      </LeftPattern>
    </CourseContainer>
  );
};

const LeftPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;

const CenterPattern = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  z-index: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  padding: 1.5rem 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Issuer = styled.div`
  font-weight: 500;

  img {
    height: 30px;
  }
`;

const CourseName = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  text-transform: lowercase;

  display: block;
`;

const CourseDate = styled.span`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;

  padding-top: 1rem;
  display: block;
`;

const CourseContainer = styled.div<{ color: string }>`
  position: relative;
  background-color: ${({ color }) => color};
  height: 251px;
  padding: 1rem;
`;

export default CourseItem;
