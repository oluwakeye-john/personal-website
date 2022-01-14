import styled from "styled-components";
import social from "../../data/social";
import Dribbble from "../icons/dribbble";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import LinkedIn from "../icons/linkedin";

interface IMobileMenu {
  open: boolean;
}

const MobileMenu = ({ open }: IMobileMenu) => {
  return (
    <MobileMenuContainer open={open}>
      <MobileMenuItem>My Works</MobileMenuItem>
      <MobileMenuItem>Download Resume</MobileMenuItem>
      <MobileMenuItem>
        <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
          Schedule a Call
        </a>
      </MobileMenuItem>

      <MobileMenuIconContainer>
        <MobileMenuIcon>
          <LinkedIn />
        </MobileMenuIcon>
        <MobileMenuIcon>
          <Facebook />
        </MobileMenuIcon>
        <MobileMenuIcon>
          <Instagram />
        </MobileMenuIcon>
        <MobileMenuIcon>
          <Dribbble />
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

export const MobileMenuIconContainer = styled(MobileMenuItem)`
  display: flex;
  justify-content: space-between;
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    stroke: #fff;
  }
`;
