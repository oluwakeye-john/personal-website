/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import works, { Work } from "../../data/works";
import CustomHeading from "../heading";
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
    <WorksContainer id="works">
      <CustomHeading
        dark
        title="My Recent Projects"
        description="Welcome to my little corner of the web, where I'll be sharing notes, code snippets, and resources on topics that interest me and updates on projects I'm working on."
      />
      <WorksTab
        tabs={tabs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <WorksSlide list={currentWorks} />
    </WorksContainer>
  );
};

const WorksContainer = styled.div`
  background-color: #000;
`;

export default Works;
