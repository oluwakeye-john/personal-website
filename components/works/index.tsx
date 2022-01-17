/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import works, { Work } from "../../data/works";
import CustomHeading from "../heading";
import SlideInWrapper, { SlideChild } from "../slide-in";
import WorksSlide from "./slide";
import WorksTab from "./tab";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabs, setTabs] = useState<string[]>([]);
  const [currentWorks, setCurrentWorks] = useState<Work[]>([]);

  const generateTabs = () => {
    let array: string[] = [];
    works.map((wk) => {
      array.push(...wk.categories);
    });
    const res = ["All", ...Array.from(new Set(array))];
    setTabs(res);
  };

  useEffect(() => {
    generateTabs();
  }, []);

  useEffect(() => {
    if (currentIndex === 0) {
      setCurrentWorks(works);
    } else {
      let _work: Work[] = [];
      works.map((wk) => {
        if (wk.categories.includes(tabs[currentIndex])) {
          _work.push(wk);
        }
      });
      setCurrentWorks(_work);
    }
  }, [currentIndex]);

  return (
    <SlideInWrapper>
      <WorksContainer id="works">
        <CustomHeading
          dark
          title="My Recent Projects"
          description="Here are some awesome projects I worked on recently. These projects cut across finance, crypto, e-commerce, among others."
        />
        <WorksTab
          tabs={tabs}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <WorksSlide list={currentWorks} />
      </WorksContainer>
    </SlideInWrapper>
  );
};

const WorksContainer = styled.div`
  background-color: #000;
`;

export default Works;
