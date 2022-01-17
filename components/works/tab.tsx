import styled from "styled-components";
import works from "../../data/works";
import { Container1 } from "../container";
import { horizontalScroll } from "../scroll";

interface IWorksTab {
  currentIndex: number;
  setCurrentIndex: (n: number) => void;
  tabs: string[];
}

const WorksTab = ({ currentIndex, setCurrentIndex, tabs }: IWorksTab) => {
  return (
    <TabContainer>
      {tabs.map((tab, index) => (
        <TabItem
          onClick={() => setCurrentIndex(index)}
          active={currentIndex === index}
          key={index}
        >
          {tab}
        </TabItem>
      ))}
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

const TabItem = styled.div<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "rgba(255, 255, 255, 0.7)")};
  font-weight: ${({ active }) => (active ? "500" : "300")} !important;
  margin-right: 3rem;
  text-transform: uppercase;

  font-size: 13px;
  line-height: 26px;
  cursor: pointer;
  font-weight: 300;

  transition: 0.3s;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  ${({ theme }) => theme.media.lg} {
    margin-right: 1.5rem;
  }
`;

export default WorksTab;
