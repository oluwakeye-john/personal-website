/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import styled from "styled-components";
import social from "../../data/social";
import { Container2, Container3 } from "../container";
import { Dash } from "../dash";
import SlideInWrapper, { SlideChild } from "../slide-in";

const HeroAbout = () => {
  return (
    <AboutWrapper>
      <Relative>
        <SlideInWrapper scrollTriggered stagger={0.3}>
          <HeroTitle style={{ zIndex: 1 }}>
            <SlideChild x={100} alt stiffness={80}>
              i develop
              <br />
            </SlideChild>
            <SlideChild x={-100} alt stiffness={80}>
              software
            </SlideChild>
          </HeroTitle>
          <AboutContainer>
            <AboutContent>
              <AboutSection1>
                <AboutSection1Content>
                  <InlineBlock>
                    <AboutSectionTitle>john</AboutSectionTitle>
                    <Dash />
                  </InlineBlock>
                  <AboutSectionTitle>beloved.</AboutSectionTitle>
                  <AboutSectionTitle>oluwakeye.</AboutSectionTitle>
                  <AboutSection1Tag>Software Developer</AboutSection1Tag>
                </AboutSection1Content>
                <AboutImage>
                  <SlideChild y={-50} stiffness={80}>
                    <img
                      draggable={false}
                      alt="John Oluwakeye"
                      src={social.me}
                    />
                  </SlideChild>
                </AboutImage>
              </AboutSection1>
              <AboutSection2>
                <AboutSectionTitleSpaced>about me</AboutSectionTitleSpaced>
                <AboutText>
                  I'm a pragmatic software developer based in Nigeria with 3
                  years of professional experience developing web and mobile
                  applications.
                </AboutText>
                <AboutText>
                  Currently, I work at Helicarrier as a Frontend Engineer, where
                  we develop crypto infrastructure for Africa.
                </AboutText>
                <AboutText>
                  In my free time, I play the piano, read books and play video
                  games.
                </AboutText>
              </AboutSection2>
            </AboutContent>
          </AboutContainer>
        </SlideInWrapper>
      </Relative>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  ${Container2}

  ${({ theme }) => theme.media.md} {
    padding: 0;
  }
`;

const Relative = styled.div`
  position: relative;
`;

const HeroTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  font-weight: 300;
  font-size: 120px;
  line-height: 94.5%;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  ${({ theme }) => theme.media.lg} {
    padding: 0;
    font-size: 80px;
    line-height: 94.5%;
  }

  ${({ theme }) => theme.media.md} {
    padding: 0 1.2rem;
  }

  ${({ theme }) => theme.media.xs} {
    font-size: 70px;
  }
`;

const AboutContainer = styled.div`
  ${Container3}
  padding-top: 9.7rem;

  ${({ theme }) => theme.media.lg} {
    margin-top: 0;
    padding-top: 7.5rem;
  }
`;

const AboutContent = styled.div`
  height: 341px;
  display: flex;

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    height: auto;
  }
`;

const AboutSection1 = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  width: 56%;
  padding: 0 6rem;
  padding-right: 3rem;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.xxl} {
    padding: 0 2rem;
    padding-right: 0;
  }

  ${({ theme }) => theme.media.md} {
    width: auto;
    padding: 0 2rem;
    padding-top: 1rem;
    margin-left: 1.5rem;
    padding-right: 0;
  }
`;

const InlineBlock = styled.div`
  display: flex;
  align-items: center;
`;

const AboutSection1Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2.2rem;

  ${({ theme }) => theme.media.lg} {
    padding-bottom: 1rem;
  }
`;

const AboutSectionTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: bold;
  font-size: 20px;
  line-height: 114%;
  letter-spacing: -0.1em;
`;

const AboutSectionTitleSpaced = styled(AboutSectionTitle)`
  margin-bottom: 1rem;
`;

const AboutSection2 = styled.div`
  width: 44%;
  padding: 2rem 3.5rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.media.xxl} {
    padding: 2rem 2rem;
  }

  ${({ theme }) => theme.media.md} {
    width: auto;
    padding: 4rem 2rem;
    margin-right: 1.5rem;
  }
`;

const AboutImage = styled.div`
  height: 100%;

  img {
    user-select: none;
    pointer-events: none;

    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

  div {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.lg} {
    img {
      width: 100%;
      height: 100%;
    }
  }

  ${({ theme }) => theme.media.md} {
    height: 280px;
  }

  ${({ theme }) => theme.media.xs} {
    height: 200px;
  }
`;

const AboutText = styled.p`
  font-weight: 300;
  font-size: 13px;
  margin: 0.43rem 0;
  color: ${({ theme }) => theme.colors.lightText};
`;

const AboutSection1Tag = styled.p`
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.lightText};
`;

export default HeroAbout;
