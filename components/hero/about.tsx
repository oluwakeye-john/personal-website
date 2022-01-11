/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import styled from "styled-components";
import { Container2, Container3 } from "../container";
import { Dash } from "../dash";

const HeroAbout = () => {
  return (
    <AboutWrapper>
      <Relative>
        <HeroTitle>
          breathing
          <br />
          pixels
        </HeroTitle>
        <AboutContainer>
          <AboutContent>
            <AboutSection1>
              <AboutSection1Content>
                <InlineBlock>
                  <AboutSectionTitle>john</AboutSectionTitle>
                  <Dash />
                </InlineBlock>
                <AboutSectionTitle>beloved</AboutSectionTitle>
                <AboutSectionTitle>oluwakeye.</AboutSectionTitle>
                <AboutSection1Tag>Software Developer</AboutSection1Tag>
              </AboutSection1Content>
              <AboutImage>
                <img alt="Me" src="/me6.png" />
              </AboutImage>
            </AboutSection1>
            <AboutSection2>
              <AboutSectionTitle>about me</AboutSectionTitle>
              <AboutText>
                Welcome to my little corner of the web, where I'll be sharing
                notes, code snippets, and resources on topics that interest me
                and updates on projects I'm working on.
              </AboutText>
              <AboutText>
                Where I'll be sharing notes, code snippets, and resources on
                topics that interest me and updates on projects.
              </AboutText>
            </AboutSection2>
          </AboutContent>
        </AboutContainer>
      </Relative>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  ${Container2}

  ${({ theme }) => theme.media.lg} {
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

  ${({ theme }) => theme.media.lg} {
    padding: 0 1.2rem;
    font-size: 80px;
    line-height: 94.5%;
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

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    height: auto;
    /* height: 300px; */
  }
`;

const AboutSection1 = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  width: 56%;
  padding: 0 6rem;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    width: auto;
    padding: 0 2rem;
    padding-top: 1rem;
    margin-left: 1.5rem;
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

const AboutSectionTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: bold;
  font-size: 20px;
  line-height: 114%;
  letter-spacing: -0.1em;
`;

const AboutSection2 = styled.div`
  width: 44%;
  padding: 5rem 3.5rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};

  ${({ theme }) => theme.media.lg} {
    width: auto;
    padding: 4rem 2rem;
    margin-right: 1.5rem;
  }
`;

const AboutImage = styled.div`
  height: 100%;

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }

  ${({ theme }) => theme.media.lg} {
    height: 280px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const AboutText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightText};
`;

const AboutSection1Tag = styled.p`
  font-size: 11px;
`;

export default HeroAbout;
