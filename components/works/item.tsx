/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Work } from "../../data/works";
import { cloudinaryImage } from "../../utils/image";

const WorksItem = ({ work }: { work: Work }) => {
  return (
    <WorksItemContainer>
      <WorksItemContent>
        <img alt={work.title} src={cloudinaryImage(work.image)} />
        <LaunchButtonContainer className="ls">
          <LaunchButton href={work.liveUrl} target="_blank">
            <span>
              launch
              <br />
              app
            </span>
          </LaunchButton>
        </LaunchButtonContainer>
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

  &:hover {
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

const LaunchButtonContainer = styled.div`
  position: absolute;

  bottom: 1rem;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;

  transform: scale(0) translateY(200px);
  opacity: 0;
  transition: 0.5s;
  cursor: pointer;
`;

const LaunchButton = styled.a`
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.32);

  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: 300;

  font-size: 20px;
  line-height: 94.5%;
  color: #fff;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  text-decoration: none;
`;
