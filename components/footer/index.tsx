import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styled from "styled-components";
import social from "../../data/social";
import { Container2 } from "../container";
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
            <Link href="/">
              <a>
                <FooterText>john.oluwakeye</FooterText>
              </a>
            </Link>
          </FooterItem>
          <FooterItem>
            <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
              <Icon>
                <Mail />
              </Icon>
              <span>{social.email}</span>
            </a>
          </FooterItem>
          <FooterItem>
            <a href={`tel:${social.phone}`} target="_blank" rel="noreferrer">
              <Icon>
                <Phone />
              </Icon>
              <span>{social.phone}</span>
            </a>
          </FooterItem>
          <SocialItem>
            <FaLinkedinIn />
            <FaFacebookF />
            <FaGithub />
            <FaInstagram />
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

  font-family: ${({ theme }) => theme.fontFamilies.alt};

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

  margin-bottom: 2rem;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.lightPrimary};
  }

  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 15px;
    height: 15px;
    vertical-align: middle;

    cursor: pointer;

    path {
      fill: currentColor;
    }
  }
`;

const SocialItem = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.71);

  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    width: 15px;
    height: 15px;
    vertical-align: middle;

    margin-right: 2rem;

    cursor: pointer;

    transition: 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  path {
    fill: currentColor;
  }
`;

const Icon = styled.div`
  margin-right: 1rem;
`;
