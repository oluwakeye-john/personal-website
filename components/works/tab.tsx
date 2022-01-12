import styled from "styled-components";
import { Container1 } from "../container";
import { horizontalScroll } from "../scroll";

const WorksTab = () => {
  return (
    <TabContainer>
      <TabItem>All</TabItem>
      <TabItem>Web Development</TabItem>
      <TabItem>App Development</TabItem>
      <TabItem>Motion</TabItem>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  ${Container1};

  ${horizontalScroll};

  display: flex;

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;

    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const TabItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-right: 3rem;
  text-transform: uppercase;

  font-size: 13px;
  line-height: 26px;
  cursor: pointer;
  font-weight: 300;

  transition: 0.3s;

  ${({ theme }) => theme.media.lg} {
    margin-right: 1.5rem;
  }

  &:hover {
    color: #fff;
    font-weight: bold;
  }
`;

export default WorksTab;
