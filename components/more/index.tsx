import { useState } from "react";
import styled from "styled-components";
import { stripeButton } from "../button";
import { Container2, Container3 } from "../container";
import { YellowDash } from "../dash";
import { horizontalScroll } from "../scroll";
import { SectionHeading } from "../text";
import Awards from "./awards";
import Courses from "./courses";
import Experience from "./experience";
import Interests from "./interests";

const items = [
  {
    name: "Work Experience",
    component: Experience,
  },
  {
    name: "Courses",
    component: Courses,
  },
  {
    name: "Awards",
    component: Awards,
  },
  {
    name: "Interests",
    component: Interests,
  },
];

const More = () => {
  const [currentIndex, setCurentIndex] = useState(0);

  const Component = items[currentIndex].component;

  return (
    <MoreContainer>
      <MoreHeading>
        More
        <br />
        About Me
      </MoreHeading>
      <MoreContent>
        <MoreMenu>
          {items.map((item, index) => (
            <MoreMenuItem
              tabIndex={1}
              key={index}
              onClick={() => setCurentIndex(index)}
            >
              <MoreMenuItemText active={currentIndex === index}>
                {item.name}
              </MoreMenuItemText>
              {currentIndex === index && <MenuDash right />}
            </MoreMenuItem>
          ))}
        </MoreMenu>
        <MoreDetails>
          <Component />
        </MoreDetails>
      </MoreContent>
    </MoreContainer>
  );
};

export default More;

const MenuDash = styled(YellowDash)`
  ${({ theme }) => theme.media.lg} {
    margin-left: 0;
  }
`;

const MoreContainer = styled.div`
  ${Container2};
  padding-top: 10rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const MoreContent = styled.div`
  ${Container3}
  display: flex;
  padding-top: 5rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 3rem;
    flex-direction: column;
  }
`;

const MoreHeading = styled.h3`
  ${SectionHeading};
  color: #000;
`;

const MoreMenu = styled.div`
  width: 34%;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    display: flex;
    flex-direction: row;

    ${horizontalScroll}
  }
`;

const MoreMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
  ${stripeButton};

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    margin-bottom: 0;
    align-items: flex-start;
    margin-right: 2.5rem;
  }
`;

const MoreMenuItemText = styled.span<{ active?: boolean }>`
  font-size: 16px;
  line-height: 96.5%;
  font-weight: ${({ active }) => (active ? 500 : 300)};

  ${({ theme }) => theme.media.lg} {
    padding-bottom: 5px;
  }
`;

const MoreDetails = styled.div`
  width: 66%;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    margin-top: 2rem;
  }
`;
