/* eslint-disable react/no-unescaped-entities */

import styled from "styled-components";
import social from "../../data/social";
import { SectionDash } from "../dash";
import Quote from "../quote";

const HeroWelcome = () => {
  return (
    <WelcomeContainer>
      <TopFlex>
        <WelcomeLeft />
        <Quote
          text="Welcome to my little corner of the web, where I'll be sharing updates about myself,
              resources on topics that interest me and updates
            on projects I'm working on."
        />
      </TopFlex>
      <BottomFlex>
        <WelcomeLeftAlt>
          <SectionDash text="hello there" />
        </WelcomeLeftAlt>
        <ScheduleCall>
          <ScheduleCallButton>
            <a target="_blank" rel="noreferrer" href={`mailto:${social.email}`}>
              Schedule a Call
            </a>
          </ScheduleCallButton>
        </ScheduleCall>
      </BottomFlex>
    </WelcomeContainer>
  );
};

export default HeroWelcome;

const WelcomeContainer = styled.div`
  padding: 1rem 3rem;
  padding-bottom: 0;
  margin-top: 3.4rem;

  ${({ theme }) => theme.media.xl} {
    margin-top: 1rem;
    padding: 1rem 4rem;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.media.md} {
    margin-top: 1rem;
    padding: 1rem 4rem;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.media.sm} {
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    padding-bottom: 0;
  }
`;

const TopFlex = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

const BottomFlex = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const WelcomeLeft = styled.div`
  width: 50%;

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

const WelcomeLeftAlt = styled.div`
  width: 50%;
  padding: 0 3.5rem;

  ${({ theme }) => theme.media.lg} {
    margin-top: 2rem;
    width: 100%;
    padding: 0;
  }
`;

const ScheduleCall = styled.div`
  padding-left: 0.8rem;
  border-left: 3px solid transparent;
  margin-top: 0.2rem;
  margin-left: 1rem;

  ${({ theme }) => theme.media.lg} {
    margin-left: 0;
    display: none;
  }
`;

const ScheduleCallButton = styled.div`
  font-weight: 500;
  line-height: 16px;
  font-size: 13px;
  display: inline-block;
  cursor: pointer;
  border-bottom: 0.5px solid #000;
  font-family: ${({ theme }) => theme.fontFamilies.alt};
`;
