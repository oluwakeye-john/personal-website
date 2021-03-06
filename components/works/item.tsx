/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Work } from "../../data/works";
import { cloudinaryImage } from "../../utils/image";
import LaunchButton from "../launch";
import { SlideChild } from "../slide-in";

const WorksItem = ({ work }: { work: Work }) => {
  return (
    <WorksItemContainer>
      <WorksItemContent>
        <img alt={work.title} src={cloudinaryImage(work.image, 800)} />
        <LaunchButton text1="launch" text2="app" url={work.liveUrl} />
      </WorksItemContent>
      <WorksItemCaption>{work.title}</WorksItemCaption>
    </WorksItemContainer>
  );
};

export default WorksItem;

const WorksItemContainer = styled.div`
  display: inline-block;
  overflow: hidden;

  &:first-child {
    margin-left: 2rem;
  }

  margin-right: 2rem;
`;

const WorksItemContent = styled.div`
  width: 350px;
  height: 456px;
  background-color: rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.md} {
    width: 304px;
    height: 412px;
  }

  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: 1s ease-in-out;
  }

  &:hover,
  &:focus,
  &:focus-within {
    .ls {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    img {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`;

const WorksItemCaption = styled.p`
  color: #fff;
  text-align: center;

  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.71);

  margin: 2rem 0;
`;
