import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import svgs from "../../assets/svgs/svg";
import WorksItem from "./item";

const WorksSlide = () => {
  const slider = useRef<HTMLDivElement>(null);

  const handleForward = () => {
    if (slider.current) {
      slider.current.scrollLeft += 456;
    }
  };

  const handleBackward = () => {
    if (slider.current) {
      slider.current.scrollLeft -= 456;
    }
  };

  return (
    <Wrapper>
      <WorksSlideContainer ref={slider}>
        <WorksItem />
        <WorksItem />
        <WorksItem />
        <WorksItem />
        <WorksItem />
        <WorksItem />

        {/* <LeftControl onClick={handleBackward}>
          <Image width={53} height={122} alt="left" src={svgs.union} />
        </LeftControl>
        <RightControl onClick={handleForward}>
          <Image width={53} height={122} alt="right" src={svgs.union} />
        </RightControl> */}
      </WorksSlideContainer>
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
  white-space: nowrap;
  overflow: auto;
  scroll-behavior: smooth;
`;

const LeftControl = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transform: rotateZ(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
`;

const RightControl = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
`;