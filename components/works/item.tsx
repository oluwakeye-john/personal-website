import Image from "next/image";
import styled from "styled-components";
import images from "../../assets/images/images";

const WorksItem = () => {
  return (
    <WorksItemContainer>
      <WorksItemContent>
        <Image alt="Work 1" layout="fill" src={images.work1} />
        <LaunchButtonContainer className="ls">
          <LaunchButton>
            <span>
              launch
              <br />
              app
            </span>
          </LaunchButton>
        </LaunchButtonContainer>
      </WorksItemContent>
      <WorksItemCaption>classic online socials</WorksItemCaption>
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

  ${({ theme }) => theme.media.md} {
    width: 304px;
    height: 412px;
  }

  position: relative;
  padding: 2rem;

  img {
    transition: 0.3s;
  }

  &:hover {
    .ls {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }
`;

const WorksItemCaption = styled.p`
  color: #fff;
  text-align: center;

  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
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

const LaunchButton = styled.div`
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
`;
