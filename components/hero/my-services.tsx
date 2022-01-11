import styled from "styled-components";
import { Container2, Container3 } from "../container";
import { SectionDash } from "../dash";

const HeroServices = () => {
  return (
    <ServicesContainer>
      <SectionDash text="my services" />
      <ServicesContent>
        <ServicesFlex>
          <ServiceItem>Branding</ServiceItem>
          <ServiceItem>Web Development</ServiceItem>
          <ServiceItem>Mobile Development</ServiceItem>
        </ServicesFlex>
        <ServicesFlex>
          <ServiceItem>SEO/Marketing</ServiceItem>
          <ServiceItem>Motion & Illustration</ServiceItem>
          <ServiceItem />
        </ServicesFlex>
      </ServicesContent>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  margin-top: 6rem;
  ${Container2}

  ${({ theme }) => theme.media.lg} {
    margin-top: 3rem;
  }
`;

const ServicesContent = styled.div`
  ${Container3}
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
    min-width: 48%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export default HeroServices;
