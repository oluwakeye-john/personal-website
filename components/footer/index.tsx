import styled from "styled-components";
import social from "../../data/social";
import { Container2 } from "../container";
import Dribbble from "../icons/dribbble";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import LinkedIn from "../icons/linkedin";
import Mail from "../icons/mail";
import Phone from "../icons/phone";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Left>
          <FooterTitle>Ready?</FooterTitle>
          <FooterTitleUnderline
            as="a"
            target="_blank"
            href={`mailto:${social.email}`}
          >
            Schedule a Call
          </FooterTitleUnderline>
        </Left>
        <Right>
          <FooterItem>
            <FooterText>john.oluwakeye</FooterText>
          </FooterItem>
          <FooterItem>
            <Icon>
              <Mail />
            </Icon>
            <span>{social.email}</span>
          </FooterItem>
          <FooterItem>
            <Icon>
              <Phone />
            </Icon>
            <span>+234 803 979 3005</span>
          </FooterItem>
          <SocialItem>
            <LinkedIn />
            <Facebook />
            <Dribbble />
            <Instagram />
          </SocialItem>
        </Right>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #000;

  ${Container2};
  padding-top: 5rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const FooterTitle = styled.span`
  font-weight: 300;
  font-size: 70px;
  line-height: 93%;
  display: block;
  margin: 0.5rem 0;
  color: #fff;

  ${({ theme }) => theme.media.lg} {
    font-size: 50px;
    line-height: 100.5%;
  }
`;

const FooterText = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: 900;
  font-size: 25px;
  line-height: 32px;
  letter-spacing: -0.1em;
  color: #ffffff;
`;

const FooterTitleUnderline = styled(FooterTitle)`
  text-decoration: underline;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 45%;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 35%;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    margin-top: 4rem;
  }
`;

const FooterItem = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.71);

  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    width: 15px;
    height: 15px;
    stroke: #fff;
    font-size: 40px;
  }
`;

const SocialItem = styled(FooterItem)`
  svg {
    width: 15px;
    height: 15px;

    margin-right: 2rem;
  }
`;

const Icon = styled.div`
  margin-right: 1rem;
`;
