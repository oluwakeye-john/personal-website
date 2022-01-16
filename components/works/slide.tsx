import { useRef } from "react";
import styled from "styled-components";
import { Work } from "../../data/works";
import { horizontalScroll } from "../scroll";
import SlideInWrapper from "../slide-in";
import WorksItem from "./item";

const WorksSlide = ({ list }: { list: Work[] }) => {
  const slider = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <SlideInWrapper stagger={0.2}>
        <WorksSlideContainer ref={slider}>
          {list.map((wk) => (
            <WorksItem key={wk.index} work={wk} />
          ))}
        </WorksSlideContainer>
      </SlideInWrapper>
    </Wrapper>
  );
};

export default WorksSlide;

const Wrapper = styled.div`
  position: relative;

  padding-top: 0;
  padding-bottom: 6rem;

  overflow: hidden;
`;

const WorksSlideContainer = styled.div`
  ${horizontalScroll}
`;
