import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import social from "../../data/social";
import Instagram from "../icons/instagram";

interface IMobileMenu {
  open: boolean;
  toggle: () => void;
}

const MobileMenu = ({ open, toggle }: IMobileMenu) => {
  return (
    <MobileMenuContainer open={open}>
      <MobileMenuItem onClick={toggle}>
        <Link href="/#works">
          <a>My Works</a>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem onClick={toggle}>
        <a href={social.resume} target="_blank" rel="noreferrer">
          Download Résumé
        </a>
      </MobileMenuItem>
      <MobileMenuItemUnderline onClick={toggle}>
        <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
          Schedule a Call
        </a>
      </MobileMenuItemUnderline>

      <MobileMenuIconContainer>
        <MobileMenuIcon onClick={toggle}>
          <a href={social.linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </MobileMenuIcon>
        <MobileMenuIcon onClick={toggle}>
          <a href={social.facebook} target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </MobileMenuIcon>
        <MobileMenuIcon onClick={toggle}>
          <a href={social.instagram} target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </MobileMenuIcon>
        <MobileMenuIcon onClick={toggle}>
          <a href={social.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </MobileMenuIcon>
      </MobileMenuIconContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;

export const MobileMenuContainer = styled.div<{ open: Boolean }>`
  display: none;
  z-index: 4;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  ${({ theme }) => theme.media.lg} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;

    transform: ${({ open }) => (!open ? "translateX(-100%)" : "translateX(0)")};
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 4rem;

    transition: 0.8s all ease-in-out;

    ${({ theme }) => theme.media.sm} {
      padding: 1.5rem 1.5rem;
      flex-direction: column;
    }
  }
`;

export const MobileMenuItem = styled.div`
  color: #fff;
  margin: 2rem 0;
  font-weight: 200;
  font-size: 30px;
  line-height: 28.35px;
`;

export const MobileMenuItemUnderline = styled(MobileMenuItem)`
  text-decoration: underline;
`;

export const MobileMenuIconContainer = styled(MobileMenuItem)`
  display: flex;
  justify-content: space-between;
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }

  path {
    fill: #fff;
  }
`;
