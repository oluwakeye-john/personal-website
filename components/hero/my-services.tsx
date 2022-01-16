import styled from "styled-components";
import { Container1, Container4 } from "../container";
import { SectionDash } from "../dash";
import SlideInWrapper, { SlideChild } from "../slide-in";

const HeroServices = () => {
  return (
    <SlideInWrapper stagger={0.1} once={false}>
      <ServicesContainer>
        <SectionDash text="my services" rightDash />
        <ServicesContent>
          <ServicesFlex>
            <ServiceItem>
              <SlideChild y={50}>Branding</SlideChild>
            </ServiceItem>
            <ServiceItem>
              <SlideChild y={50}>Web Development</SlideChild>
            </ServiceItem>
            <ServiceItem>
              <SlideChild y={50}>Mobile Development</SlideChild>
            </ServiceItem>
          </ServicesFlex>
          <ServicesFlex>
            <ServiceItem>
              <SlideChild y={50}>SEO/Marketing &nbsp; &nbsp;</SlideChild>
            </ServiceItem>
            <ServiceItem>
              <SlideChild y={50}>Motion & Illustration</SlideChild>
            </ServiceItem>
            <ServiceItem />
          </ServicesFlex>
        </ServicesContent>
      </ServicesContainer>
    </SlideInWrapper>
  );
};

const ServicesContainer = styled.div`
  margin-top: 6rem;
  ${Container1}

  margin-bottom: 6rem;

  ${({ theme }) => theme.media.lg} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  font-family: ${({ theme }) => theme.fontFamilies.alt};
`;

const ServicesContent = styled.div`
  ${Container4}
  padding-top: 2rem;
`;

const ServicesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    justify-content: flex-start;
  }
`;

const ServiceItem = styled.span`
  min-width: 10%;
  margin: 1.2rem 0;

  font-weight: 300;
  font-size: 26px;
  line-height: 94.5%;

  ${({ theme }) => theme.media.lg} {
    min-width: 45%;
  }

  transition: 0.3s color;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export default HeroServices;
