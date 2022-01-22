import styled, { css } from "styled-components";
import { stripeButton } from "../button";
import { Container1 } from "../container";

export const NavbarContainer = styled.nav<{ mobileNav?: boolean }>`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 14px;

  top: 0;
  left: 0;
  right: 0;

  ${Container1};

  ${({ theme }) => theme.media.lg} {
    position: ${({ mobileNav }) => (mobileNav ? "sticky" : "static")};
  }
`;

const HideOnMobile = css`
  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;

  ${HideOnMobile}
`;

export const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    order: 1;
    justify-content: space-between;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;

  ${HideOnMobile}
`;

export const NavbarLeftItem = styled.div`
  margin-right: 5rem;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavbarCenterItem = styled.h2<{ dark?: boolean }>`
  font-weight: 900;
  line-height: 32px;
  font-size: ${({ theme }) => theme.fontSizes.h};
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  letter-spacing: -0.1em;
  padding-right: 2px;
  margin: 0;
  cursor: pointer;
  transition: 1.5s color;

  ${({ theme }) => theme.media.lg} {
    flex: 1;
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
  }
`;

export const NavbarRightItem = styled.div`
  margin-left: 2.5rem;
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
  }

  path {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavbarToggleContent = styled.div<{ open: boolean }>`
  height: 20px;
  width: 20px;

  div {
    align-self: center;
    background-color: #fff;
    height: 2px;
    margin: 4px 0;
    transition: 0.3s;

    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 5% 10%;
    }

    &:nth-of-type(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 5% 90%;
    }
  }
`;

export const NavbarLinkButton = styled.button`
  ${stripeButton};
  font-size: inherit;
`;

export const NavbarToggle = styled.button<{ open?: boolean }>`
  border: none;
  padding: 0;
  display: none;
  transition: 1s;

  ${({ theme }) => theme.media.lg} {
    width: 36px;
    height: 36px;

    background-color: ${({ open }) => (open ? "transparent" : "#000")};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
